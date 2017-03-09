using System;
using AMSoft.Base.Events;

namespace AMSoft.Base.Domain
{
    public interface IDomainEvent : IEvent
    {
        Guid AggregateRootId { get; set; }
        int Version { get; set; }
    }
}