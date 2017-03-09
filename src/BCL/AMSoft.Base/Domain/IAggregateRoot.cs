using System;
using System.Collections.Generic;

namespace AMSoft.Base.Domain
{
    public interface IAggregateRoot
    {
        Guid Id { get; }
        ICollection<IDomainEvent> Events { get; }
    }
}