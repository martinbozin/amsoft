using System.Collections.Generic;
using AMSoft.Base.Events;

namespace AMSoft.Base.Commands
{
    public interface ICommandHandler<in TCommand> where TCommand : ICommand
    {
        IEnumerable<IEvent> Handle(TCommand command);
    }
}