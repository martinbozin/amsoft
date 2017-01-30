using System;
using System.Text.RegularExpressions;

namespace AMSoft.Base.Extensions
{
    public static class StringExtensions
    {
        public static string FormatString(this string format, params object[] args)
        {
            return string.Format(format, args);
        }

        public static bool Match(this string value, string pattern)
        {
            Regex regex = new Regex(pattern);
            return regex.IsMatch(value);
        }

        public static Int16 ToInt16(this string value)
        {
            Int16 result = 0;

            if (!string.IsNullOrEmpty(value))
                Int16.TryParse(value, out result);

            return result;
        }

        public static Int32 ToInt32(this string value)
        {
            Int32 result = 0;

            if (!string.IsNullOrEmpty(value))
                Int32.TryParse(value, out result);

            return result;
        }

        public static Int64 ToInt64(this string value)
        {
            Int64 result = 0;

            if (!string.IsNullOrEmpty(value))
                Int64.TryParse(value, out result);

            return result;
        }

        public static bool ToBoolean(this string value)
        {
            bool result = false;

            if (!string.IsNullOrEmpty(value))
                bool.TryParse(value, out result);

            return result;
        }
    }
}
