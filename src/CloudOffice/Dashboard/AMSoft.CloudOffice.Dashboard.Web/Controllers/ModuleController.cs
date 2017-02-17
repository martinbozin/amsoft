using System;
using System.Collections.Generic;
using System.Linq;
using AMSoft.CloudOffice.Data;
using AMSoft.CloudOffice.Web.ViewModels;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace AMSoft.CloudOffice.Web.Controllers
{
    /// <summary>
    /// Webapi controller for modules
    /// </summary>
    [Route("api/[controller]/[Action]")]
    public class ModuleController : Controller
    {
        private readonly ILogger _logger;
        public ModuleController(ILogger<ModuleController> logger)
        {
            _logger = logger;
        }

        #region GetAll
        /// <summary>
        /// Return all modules in list
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        [ActionName("GetAll")]
        public IActionResult GetAll()
        {
            try
            {
                using (var contextDb = new CloudOfficeDbContext())
                {
                    var modules = contextDb.Modules.Include(x => x.Category).ToList();
                    if (modules != null)
                    {
                        var listModules = new List<ModuleViewModel>();
                        foreach (var item in modules)
                        {
                            var model = new ModuleViewModel
                            {
                                ModuleId = item.ModuleId,
                                Name = item.Name
                            };
                            if (item.Category != null) model.CategoryName = item.Category.Name;
                            listModules.Add(model);
                        }
                        return new ObjectResult(listModules);
                    }
                }
                return BadRequest();
            }
            catch (Exception e)
            {
                _logger.LogError(e.Message);
                throw;
            }
        }
        #endregion

        #region GetById
        /// <summary>
        /// Return module by Id
        /// </summary>
        /// <param name="Id"></param>
        /// <returns></returns>
        [HttpGet("{Id}")]
        [ActionName("GetById")]
        public IActionResult GetById(int Id)
        {
            try
            {
                using (var contextDb = new CloudOfficeDbContext())
                {
                    var module = contextDb.Modules.Include(x => x.Category).FirstOrDefault(x => x.ModuleId == Id);
                    if (module == null)
                    {
                        return NotFound();
                    }
                    var model = new ModuleViewModel
                    {
                        ModuleId = module.ModuleId,
                        Name = module.Name
                    };
                    if (module.Category != null) model.CategoryName = module.Category.Name;
                    return new ObjectResult(model);
                }
            }
            catch (Exception e)
            {
                _logger.LogError(e.Message);
                throw;
            }
        }
        #endregion

        #region GetByCategory
        /// <summary>
        /// Return modules by category
        /// </summary>
        /// <param name="category"></param>
        /// <returns></returns>
        [HttpGet("{category}")]
        [ActionName("GetByCategory")]
        public IActionResult GetByCategory(string category)
        {
            try
            {
                using (var contextDb = new CloudOfficeDbContext())
                {
                    var modules = contextDb.Modules.Include(x => x.Category).Where(c => c.Category != null && c.Category.Name == category).ToList();
                    if (modules == null)
                    {
                        return NotFound();
                    }
                    var listModules = new List<ModuleViewModel>();
                    foreach (var item in modules)
                    {
                        var model = new ModuleViewModel
                        {
                            ModuleId = item.ModuleId,
                            Name = item.Name,
                            CategoryName = item.Category.Name
                        };
                        listModules.Add(model);
                    }
                    return new ObjectResult(listModules);
                }
            }
            catch (Exception e)
            {
                _logger.LogError(e.Message);
                throw;
            }
        }
        #endregion   
    }
}
