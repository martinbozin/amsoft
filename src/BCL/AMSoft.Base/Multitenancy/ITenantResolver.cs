using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;

namespace AMSoft.Base.Multitenancy
{
    public interface ITenantResolver<TTenant>
    {
        Task<TenantContext<TTenant>> ResolveAsync(HttpContext context);
    }
}