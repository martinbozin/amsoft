using System;
using System.Collections.Generic;
using System.Linq;
using ExtCore.Infrastructure;
using ExtCore.WebApplication;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace AMSoft.CloudOffice.Web
{
    public  class ExtCoreStartup
    {
        private readonly IConfigurationRoot _configuration;
        private readonly IHostingEnvironment _hostingEnvironment;
        private IServiceProvider _serviceProvider;
        private readonly IAssemblyProvider _assemblyProvider;

        public ExtCoreStartup(IConfigurationRoot configuration, IHostingEnvironment hostingEnvironment, IServiceProvider serviceProvider, IAssemblyProvider assemblyProvider)
        {
            _configuration = configuration;
            _hostingEnvironment = hostingEnvironment;
            _serviceProvider = serviceProvider;
            _assemblyProvider = assemblyProvider;
        }

        private Action<T>[] GetPrioritizedActions<T>(IEnumerable<KeyValuePair<int, Action<T>>> actionsByPriorities)
        {
            return actionsByPriorities
                .OrderBy(actionByPriority => actionByPriority.Key)
                .Select(actionByPriority => actionByPriority.Value)
                .ToArray();
        }

        private void DiscoverAssemblies()
        {
            var extensionsPath = _configuration?["Extensions:Path"];
            var assembliesPath = string.IsNullOrEmpty(extensionsPath)
                ? null
                : _hostingEnvironment.ContentRootPath + extensionsPath;

            var assemblies = _assemblyProvider.GetAssemblies(assembliesPath);
            ExtensionManager.SetAssemblies(assemblies);
        }

        /// <summary>
        /// Discovers the assemblies, initializes extensions and services that are used by a web application.
        /// Also this method executes prioritized (defined in a specific order) actions (code fragments)
        /// from all the extensions, so each extension may execute some code within this method using the
        /// <c>ConfigureServicesActionsByPriorities</c> property of the <see cref="IExtension">IExtension</see> interface.
        /// </summary>
        /// <param name="services">The current set of the services configured in the DI.</param>
        public virtual void ConfigureServices(IServiceCollection services)
        {
            DiscoverAssemblies();

            foreach (var extension in ExtensionManager.Extensions)
            {
                extension.SetServiceProvider(_serviceProvider);
                extension.SetConfigurationRoot(_configuration);
            }

            foreach (var prioritizedConfigureServicesAction in GetPrioritizedConfigureServicesActions())
            {
                prioritizedConfigureServicesAction(services);
                RebuildServiceProvider(services);
            }
        }

        /// <summary>
        /// Executes prioritized (defined in a specific order) actions (code fragments)
        /// from all the extensions, so each extension may execute some code within this method using the
        /// <c>ConfigureActionsByPriorities</c> property of the <see cref="IExtension">IExtension</see> interface.
        /// </summary>
        /// <param name="applicationBuilder"></param>
        public virtual void Configure(IApplicationBuilder applicationBuilder)
        {
            foreach (var prioritizedConfigureAction in GetPrioritizedConfigureActions())
            {
                prioritizedConfigureAction(applicationBuilder);
            }
        }

        private Action<IServiceCollection>[] GetPrioritizedConfigureServicesActions()
        {
            var configureServicesActionsByPriorities = new List<KeyValuePair<int, Action<IServiceCollection>>>();
            foreach (var extension in ExtensionManager.Extensions)
                if (extension.ConfigureServicesActionsByPriorities != null)
                    configureServicesActionsByPriorities.AddRange(extension.ConfigureServicesActionsByPriorities);

            return GetPrioritizedActions(configureServicesActionsByPriorities);
        }

        private void RebuildServiceProvider(IServiceCollection services)
        {
            _serviceProvider = services.BuildServiceProvider();

            foreach (IExtension extension in ExtensionManager.Extensions)
                extension.SetServiceProvider(_serviceProvider);
        }

        private IEnumerable<Action<IApplicationBuilder>> GetPrioritizedConfigureActions()
        {
            var configureActionsByPriorities = new List<KeyValuePair<int, Action<IApplicationBuilder>>>();

            foreach (var extension in ExtensionManager.Extensions)
                if (extension.ConfigureActionsByPriorities != null)
                    configureActionsByPriorities.AddRange(extension.ConfigureActionsByPriorities);

            return GetPrioritizedActions(configureActionsByPriorities);
        }
    }
}