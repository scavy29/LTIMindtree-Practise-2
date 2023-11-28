using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using JobPortal.Models;

namespace JobPortal.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ApplicationController : ControllerBase
    {
        private readonly ApplicationDbContext _context; // Replace 'ApplicationDbContext' with your DbContext class

        public ApplicationController(ApplicationDbContext context)
        {
            _context = context;
        }

        //GET: api/Application
        [HttpGet]
        [Route("api/Application")]
        public async Task<IActionResult> GetApplications()
        {
        try
        {
            var jobs = await _context.Jobs.ToListAsync(); // Assuming you are using Entity Framework Core

            return Ok(jobs);
        }
        catch (Exception ex)
        {
            return StatusCode(500, $"Internal server error: {ex.Message}");
        }
    }
    }
}