﻿using System;

namespace AMSoft.Base.Domain
{
    public class DomainEvent : IDomainEvent
    {
        public Guid AggregateRootId { get; set; }
        public int Version { get; set; }
        public DateTime TimeStamp { get; set; } = DateTime.UtcNow;
        public Guid UserId { get; set; }
    }
}