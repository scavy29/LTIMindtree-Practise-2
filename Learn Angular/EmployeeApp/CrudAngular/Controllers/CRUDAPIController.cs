using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using CrudAngular.Models;

namespace CrudAngular.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CRUDAPIController : ControllerBase
    {
        private AppDbContext db;
        public CRUDAPIController(AppDbContext _context)
        {
            this.db=_context;
        }

        
    }
}