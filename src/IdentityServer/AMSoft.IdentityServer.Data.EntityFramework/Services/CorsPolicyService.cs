using System;
using System.Linq;
using System.Threading.Tasks;
using AMSoft.IdentityServer.Data.EntityFramework.Interfaces;
using IdentityServer4.Services;
using Microsoft.Extensions.Logging;

namespace AMSoft.IdentityServer.Data.EntityFramework.Services
{
    public class CorsPolicyService : ICorsPolicyService
    {
        private readonly IConfigurationDbContext _context;
        private readonly ILogger<CorsPolicyService> _logger;

        public CorsPolicyService(IConfigurationDbContext context, ILogger<CorsPolicyService> logger)
        {
            if (context == null) throw new ArgumentNullException(nameof(context));

            _context = context;
            _logger = logger;
        }

        public Task<bool> IsOriginAllowedAsync(string origin)
        {
            var origins = _context.Clients.SelectMany(x => x.AllowedCorsOrigins.Select(y => y.Origin)).ToList();

            var distinctOrigins = origins.Where(x => x != null).Distinct();

            var isAllowed = distinctOrigins.Contains(origin, StringComparer.OrdinalIgnoreCase);

            _logger.LogDebug("Origin {origin} is allowed: {originAllowed}", origin, isAllowed);

            return Task.FromResult(isAllowed);
        }
    }
}