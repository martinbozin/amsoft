using System.Collections.Generic;
using Microsoft.AspNetCore.Http;

namespace AMSoft.CloudOffice.Infrastructure.Localization.Mvc
{
    public class CsvImportDescription
    {
        public string Information { get; set; }
        public ICollection<IFormFile> File { get; set; }
    }
}