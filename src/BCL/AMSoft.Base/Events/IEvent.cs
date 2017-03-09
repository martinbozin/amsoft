using System;

namespace AMSoft.Base.Events
{
    public interface IEvent
    {
        DateTime TimeStamp { get; set; }
        Guid UserId { get; set; }
    }
}