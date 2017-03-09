using System.Threading.Tasks;

namespace AMSoft.Base.Domain
{
    public interface IEventStore
    {
        void SaveEvent<TAggregate>(IDomainEvent @event) where TAggregate : IAggregateRoot;
        Task SaveEventAsync<TAggregate>(IDomainEvent @event) where TAggregate : IAggregateRoot;
    }
}