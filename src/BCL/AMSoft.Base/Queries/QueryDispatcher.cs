using System;
using System.Threading.Tasks;
using AMSoft.Base.DependencyResolver;

namespace AMSoft.Base.Queries
{
    public class QueryDispatcher : IQueryDispatcher
    {
        private readonly IResolver _resolver;

        public QueryDispatcher(IResolver resolver)
        {
            _resolver = resolver;
        }

        public TResult Dispatch<TQuery, TResult>(TQuery query) where TQuery : IQuery
        {
            if (query == null)
                throw new ArgumentNullException(nameof(query));

            var queryHandler = _resolver.Resolve<IQueryHandler<TQuery, TResult>>();

            if (queryHandler == null)
                throw new Exception($"No handler found for query '{query.GetType().FullName}'");

            return queryHandler.Retrieve(query);
        }

        public async Task<TResult> DispatchAsync<TQuery, TResult>(TQuery query) where TQuery : IQuery
        {
            if (query == null)
                throw new ArgumentNullException(nameof(query));

            var queryHandler = _resolver.Resolve<IQueryHandlerAsync<TQuery, TResult>>();

            if (queryHandler == null)
                throw new Exception($"No handler found for query '{query.GetType().FullName}'");

            return await queryHandler.RetrieveAsync(query);
        }
    }
}