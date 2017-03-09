using System;

namespace AMSoft.Base.Extensions
{
    public static class ObjectExtensions
    {
        public static bool IsNull(this object source)
        {
            return source == null;
        }

        public static void Raise(this EventHandler eventHandler,
            object sender, EventArgs e)
        {
            if (eventHandler != null)
            {
                eventHandler(sender, e);
            }
        }

        public static void Raise<T>(this EventHandler<T> eventHandler,
            object sender, T e)
           where T : EventArgs
        {
            if (eventHandler != null)
            {
                eventHandler(sender, e);
            }
        }
    }
}