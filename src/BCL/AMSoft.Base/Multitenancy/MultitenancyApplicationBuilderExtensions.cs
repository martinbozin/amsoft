using AMSoft.Base.Multitenancy.Internal;
using Microsoft.AspNetCore.Builder;

namespace AMSoft.Base.Multitenancy
{
    public static class MultitenancyApplicationBuilderExtensions
    {
        public static IApplicationBuilder UseMultitenancy<TTenant>(this IApplicationBuilder app)
        {
            Ensure.Argument.NotNull(app, nameof(app));
            return app.UseMiddleware<TenantResolutionMiddleware<TTenant>>();
        }
    }
}