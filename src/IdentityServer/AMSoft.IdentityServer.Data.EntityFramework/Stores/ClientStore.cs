﻿



using System;
using System.Linq;
using System.Threading.Tasks;
using IdentityServer4.EntityFramework.Interfaces;
using IdentityServer4.EntityFramework.Mappers;
using IdentityServer4.Models;
using IdentityServer4.Stores;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using IdentityServer4.EntityFramework.DbContexts;

namespace IdentityServer4.EntityFramework.Stores
{
    public class ClientStore : IClientStore
    {
        private readonly IConfigurationDbContext _context;
        private readonly ILogger<ClientStore> _logger;

        public ClientStore(IConfigurationDbContext context, ILogger<ClientStore> logger)
        {
            if (context == null) throw new ArgumentNullException(nameof(context));

            _context = context;
            _logger = logger;

        }

        public Task<Client> FindClientByIdAsync(string clientId)
        {
            var client = _context.Clients
                .Include(x => x.AllowedGrantTypes)
                .Include(x => x.RedirectUris)
                .Include(x => x.PostLogoutRedirectUris)
                .Include(x => x.AllowedScopes)
                .Include(x => x.ClientSecrets)
                .Include(x => x.Claims)
                .Include(x => x.IdentityProviderRestrictions)
                .Include(x => x.AllowedCorsOrigins)
                .FirstOrDefault(x => x.ClientId == clientId);
            var model = client?.ToModel();

            _logger.LogDebug("{clientId} found in database: {clientIdFound}", clientId, model != null);

            return Task.FromResult(model);
        }
    }
}