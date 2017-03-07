using System;

namespace AMSoft.CloudOffice.Infrastructure.Localization.DbStringLocalizer
{
    public class ExportHistory
    {
        public long Id { get; set; }

        public DateTime Exported { get; set; }

        public string Reason { get; set; }
    }
}