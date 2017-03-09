using System.Collections.Generic;

namespace AMSoft.Base.DependencyResolver
{
    public interface IResolver
    {
        T Resolve<T>();
        IEnumerable<T> ResolveAll<T>();
    }
}