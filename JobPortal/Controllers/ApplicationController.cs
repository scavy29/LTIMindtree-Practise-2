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

        //GET
        // [HttpGet]
        // [Route("/api/Application")]
        // public async Task<IActionResult> GetApplication()
        // {
        //     try
        //     {
        //         var jobApplications = await _context.Applications
        //             .Include(ja => ja.Job) // Include related Jobs
        //             .ToListAsync();

        //         // Create a list of ApplicationDTO objects
        //         var ApplicationDTOs = jobApplications.Select(ja => new Application
        //         {
        //             Id = ja.ApplicationID,
        //             ApplicantName = ja.ApplicationName,
        //             ContactNumber = ja.ContactNumber,
        //             MailID = ja.MailID,
        //             JobTitle = ja.JobTitle,
        //             Status = ja.Status,
                    
        //             Job = new Job
        //             {
        //                 Id = ja.Job.JobID,
        //                 Title = ja.Job.JobTitle,
        //                 Department = ja.Job.Department,
        //                 Location = ja.Job.Location,
        //                 Responsibilities = ja.Job.Responsibility,
        //                 Qualifications = ja.Job.Qualification,
        //                 ApplicationDeadline = ja.Job.DeadLine,
        //                 Category = ja.Job.Category,
        //             },
                    
                    
        //         }).ToList();

        //         return Ok(ApplicationDTOs);
        //     }
        //     catch (Exception ex)
        //     {
        //         return StatusCode(500, $"Internal server error: {ex.Message}");
        //     }
        // }

        //POST: /api/Application
        [HttpPost]
        [Route("/api/Application")]
        public IActionResult AddApplication(Application app)
        {
            try
            {
                if(app==null)
                {
                    return BadRequest("Application is invalid");
                }

                _context.Application.Add(app);
                _context.SaveChanges();
                return Ok(app);   
            }
            catch(Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }

        //GET: /api/Application/GetJobApplicatiopnsByUserId
        [HttpGet]
        [Route("/api/Application/GetJobApplicatiopnsByUserId")]
        public IActionResult GetJobApplicatiopnsByUserId(int id)
        {
            var app=_context.Jobs.Find(id);
            if(app==null)
            {
                return NotFound($"Job Application with ID:{id} not found");
            }
            return Ok(app);
        }

    }
}