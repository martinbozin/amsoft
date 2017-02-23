using System;
using System.Collections.Generic;
using System.Linq;
using AMSoft.CloudOffice.Data.Interfaces;
using AMSoft.CloudOffice.Infrastructure.Mvc;
using AMSoft.CloudOffice.Web.ViewModels;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace AMSoft.CloudOffice.Web.Controllers
{
    /// <summary>
    /// Webapi controller for modules
    /// </summary>
    [Route("api/[controller]/[Action]")]
    public class ModuleController : AppControllerBase
    {
        private readonly ICloudOfficeDbContext _context;
        private readonly ILogger _logger;
        public ModuleController(ICloudOfficeDbContext context, ILogger<ModuleController> logger)
        {
            if (context == null) throw new ArgumentNullException(nameof(context));

            _context = context;
            _logger = logger;
        }

        #region GetAll
        /// <summary>
        /// Return all modules in list
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        [ActionName("GetAll")]
        [Authorize]
        public IActionResult GetAll()
        {
            try
            {
                var modules = _context.Modules.Include(x => x.ModuleCategory).ToList();
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
                        if (item.ModuleCategory != null) model.CategoryName = item.ModuleCategory.Name;
                        listModules.Add(model);
                    }
                    return new ObjectResult(listModules);
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
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpGet("{Id}")]
        [ActionName("GetById")]
        [Authorize]
        public IActionResult GetById(int id)
        {
            try
            {
                var module = _context.Modules.Include(x => x.ModuleCategory).FirstOrDefault(x => x.ModuleId == id);
                if (module == null)
                {
                    return NotFound();
                }
                var model = new ModuleViewModel
                {
                    ModuleId = module.ModuleId,
                    Name = module.Name
                };
                if (module.ModuleCategory != null) model.CategoryName = module.ModuleCategory.Name;
                return new ObjectResult(model);
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
        [Authorize]
        public IActionResult GetByCategory(string category)
        {
            try
            {
                var modules = _context.Modules.Include(x => x.ModuleCategory).Where(c => c.ModuleCategory != null && c.ModuleCategory.Name == category).ToList();
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
                        CategoryName = item.ModuleCategory.Name
                    };
                    listModules.Add(model);
                }
                return new ObjectResult(listModules);
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
