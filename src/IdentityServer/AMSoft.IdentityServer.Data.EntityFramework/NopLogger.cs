



using Microsoft.Extensions.Logging;
using System;

namespace IdentityServer4.EntityFramework
{
    class NopLogger : ILogger, IDisposable
    {
        public IDisposable BeginScope<TState>(TState state)
        {
            return this;
        }

        public void Dispose()
        {
        }

        public bool IsEnabled(LogLevel logLevel)
        {
            return false;
        }

        public void Log<TState>(LogLevel logLevel, EventId eventId, TState state, Exception exception, Func<TState, Exception, string> formatter)
        {
        }
    }

    class NopLogger<T> : NopLogger, ILogger<T>
    {
    }
}
