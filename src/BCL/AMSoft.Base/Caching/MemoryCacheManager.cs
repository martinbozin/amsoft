using System;
using System.Threading.Tasks;
using Microsoft.Extensions.Caching.Memory;

namespace AMSoft.Base.Caching
{
    public class MemoryCacheManager : ICacheManager
    {
        readonly IMemoryCache _memoryCache;

        public MemoryCacheManager(IMemoryCache memoryCache)
        {
            _memoryCache = memoryCache;
        }

        public T Get<T>(string key)
        {
            return (T)_memoryCache.Get(key);
        }

#pragma warning disable 1998
        public async Task<T> GetAsync<T>(string key)
#pragma warning restore 1998
        {
            return (T)_memoryCache.Get(key);
        }

        public void Set(string key, object data, int cacheTime)
        {
            if (data == null)
                return;

            if (IsSet(key))
                return;

            var memoryCacheEntryOptions = new MemoryCacheEntryOptions().SetAbsoluteExpiration(TimeSpan.FromSeconds(cacheTime));

            _memoryCache.Set(key, data, memoryCacheEntryOptions);
        }

        public bool IsSet(string key)
        {
            return _memoryCache.Get(key) != null;
        }

        public void Remove(string key)
        {
            _memoryCache.Remove(key);
        }

#pragma warning disable 1998
        public async Task RemoveAsync(string key)
#pragma warning restore 1998
        {
            _memoryCache.Remove(key);
        }

        public void RemoveByPattern(string pattern)
        {
            //var regex = new Regex(pattern, RegexOptions.Singleline | RegexOptions.Compiled | RegexOptions.IgnoreCase);
            //var keysToRemove = new List<string>();

            //foreach (var item in Cache)
            //{
            //	if (regex.IsMatch(item.Key))
            //	{
            //		keysToRemove.Add(item.Key);
            //	}
            //}

            //foreach (string key in keysToRemove)
            //{
            //	Remove(key);
            //}

            throw new NotImplementedException();
        }

        public void Clear()
        {
            //foreach (var item in Cache)
            //{
            //	Remove(item.Key);
            //}

            throw new NotImplementedException();
        }
    }
}