using System;

namespace AMSoft.IdentityServer.Configurator.Console_Menu
{
    public class MenuEntry<T>
    {
        public Action<T> RelatedAction { get; set; }
        public string Description;

        public MenuEntry(string description, Action<T> relatedAction)
        {
            Description = description;
            RelatedAction = relatedAction;
        }

        public void ExecuteEntry(T inputValue)
        {
            RelatedAction.Invoke(inputValue);
        }
    }

    public class MenuEntry<T, T1>
    {
        public Func<T, T1> RelatedAction { get; set; }
        public string Description;

        public MenuEntry(string description, Func<T, T1> relatedAction)
        {
            Description = description;
            RelatedAction = relatedAction;
        }

        public T1 ExecuteEntry(T inputValue)
        {
            T1 output = RelatedAction.Invoke(inputValue);
            return output;
        }
    }

    public class MenuEntry
    {
        public Action RelatedAction { get; set; }
        public string Description;

        public MenuEntry(string description, Action relatedAction)
        {
            Description = description;
            RelatedAction = relatedAction;
        }

        public void ExecuteEntry()
        {
            RelatedAction.Invoke();
        }
    }
}