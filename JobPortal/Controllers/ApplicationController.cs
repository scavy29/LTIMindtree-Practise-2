using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using JobPortal.Models;
using Microsoft.EntityFrameworkCore;

namespace JobPortal.Controllers
{
    [ApiController]
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
                var apps = await _context.Applications.ToListAsync(); // Assuming you are using Entity Framework Core

                return Ok(apps);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }


        //POST: api/Job
        [HttpPost]
        [Route("api/Application")]
        public async Task<IActionResult> AddApp([FromBody] Application a)
        {
            try
            {
                if (a == null)
                {
                    return BadRequest("Job position data is invalid.");
                }

                _context.Applications.Add(a);
                await _context.SaveChangesAsync();

                return Ok(a);
                //return CreatedAtAction("GetJobPosition", new { id = jobPosition.Id }, jobPosition);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }

        [HttpGet]
        [Route("api/Application/GetJobApplicationByUserId")]
        public async Task<IActionResult> GetJobApplicationByUserId(int id)
        {
            try
            {
                var app = await _context.Applications.FindAsync(id);

                if (app == null)
                {
                    return NotFound($"Application with ID {id} not found.");
                }

                return Ok(app);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }

        [HttpDelete("api/Application/{id}")]
        public IActionResult DeleteApplication(int id)
        {
            try
            {
                var jid=_context.Applications.Find(id);
                if(jid!=null)
                {
                    _context.Remove(jid);
                    _context.SaveChanges();
                    return Ok(jid);
                }
                return BadRequest();
            }
            catch(Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }


        [HttpPut("api/Application/{id}")]
        public async Task<IActionResult> UpdateJob(int id,ApplicationController app)
        {
            try
            {
                // Check if the model state is valid
                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }

                var existingapplication = await _context.Applications.FirstOrDefaultAsync(a => a.ApplicationID == id);

                if (existingapplication != null)
                {
                    // existingJob.JobTitle = updatedJob.JobTitle;
                    // existingJob.Department = updatedJob.Department;
                    // existingJob.Location = updatedJob.Location;
                    // existingJob.Responsibility = updatedJob.Responsibility;
                    // existingJob.Qualification = updatedJob.Qualification;
                    // existingJob.DeadLine = updatedJob.DeadLine;
                    // existingJob.Category = updatedJob.Category;
                    _context.Update(existingapplication);
                    await _context.SaveChangesAsync(); // Use asynchronous SaveChanges method
                    return Ok(existingapplication);
                }

                return NotFound($"Application with ID {id} not found.");
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }


        [HttpPatch("api/Application/ChangeStatus/{id}")]
        public async Task<IActionResult> ChangeJobStatus(int id, [FromBody] string newStatus)
        {
            try
            {
            var app = await _context.Applications.FindAsync(id);

            if (app == null)
            {
                return NotFound($"Application with ID {id} not found.");
            }
            app.Status = newStatus; // Assuming you have a 'Status' property in your Job model

            _context.Entry(app).State = EntityState.Modified;
            await _context.SaveChangesAsync();

            return Ok(app);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }

    }
}