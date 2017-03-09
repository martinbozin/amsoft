using System.Collections.Generic;
using System.Threading.Tasks;
using AMSoft.Base.Events;

namespace AMSoft.Base.Commands
{
    public interface ICommandHandlerAsync<in TCommand> where TCommand : ICommand
    {
        Task<IEnumerable<IEvent>> HandleAsync(TCommand command);
    }
}