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
    // [Route("api/[controller]")]
    public class JobAppController : ControllerBase
    {
        private readonly ApplicationDbContext _context; // Replace 'ApplicationDbContext' with your DbContext class

        public JobAppController(ApplicationDbContext context)
        {
            _context = context;
        }

        /*
        Required:
        PUT: api/Job/{Id}
        DELETE: api/Job/{Id}
        GET: api/Job
        POST: api/Job
        GET: api/Job/JobTitle
        */

        // PUT: api/Job/{Id}
    [HttpPut("api/Job/{Id}")]
public async Task<IActionResult> UpdateJob(int Id, Job updatedJob)
{
    try
    {
        // Check if the model state is valid
        if (!ModelState.IsValid)
        {
            return BadRequest(ModelState);
        }

        var existingJob = await _context.Jobs.FirstOrDefaultAsync(j => j.JobID == Id);

        if (existingJob != null)
        {
            existingJob.JobTitle = updatedJob.JobTitle;
            existingJob.Department = updatedJob.Department;
            existingJob.Location = updatedJob.Location;
            existingJob.Responsibility = updatedJob.Responsibility;
            existingJob.Qualification = updatedJob.Qualification;
            existingJob.DeadLine = updatedJob.DeadLine;
            existingJob.Category = updatedJob.Category;

            await _context.SaveChangesAsync(); // Use asynchronous SaveChanges method
            return Ok(existingJob);
        }

        return NotFound($"Job with ID {Id} not found.");
    }
    catch (Exception ex)
    {
        return StatusCode(500, $"Internal server error: {ex.Message}");
    }
}



        //GET: api/Job
        [HttpGet]
[Route("api/Job")]
public async Task<IActionResult> GetJobs()
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


        // DELETE: api/Job/{Id}
        [HttpDelete("api/Job/{Id}")]
        public IActionResult DeleteJob(int Id)
        {
            try
            {
                var jid=_context.Jobs.Find(Id);
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
        

        // GET: api/Job/JobTitle
        [HttpGet]
[Route("api/Job/JobTitle")]
public async Task<IActionResult> GetJobTitle(string title)
{
    try
    {
        var positionTitles = await _context.Jobs.FirstOrDefaultAsync(j => j.JobTitle == title);

        if (positionTitles != null)
        {
            return Ok(positionTitles);
        }

        return NotFound($"No job found with the title '{title}'.");
    }
    catch (Exception ex)
    {
        return StatusCode(500, $"Internal server error: {ex.Message}");
    }
}

        //POST: api/Job
        [HttpPost]
[Route("api/Job")]
public async Task<IActionResult> AddJob([FromBody] Job j)
{
    try
    {
        if (j == null)
        {
            return BadRequest("Job position data is invalid.");
        }

        _context.Jobs.Add(j);
        await _context.SaveChangesAsync();

        return Ok(j);
        //return CreatedAtAction("GetJobPosition", new { id = jobPosition.Id }, jobPosition);
    }
    catch (Exception ex)
    {
        return StatusCode(500, $"Internal server error: {ex.Message}");
    }
}


        // DELETE: api/Job/{Id}
        [HttpDelete("positions/delete")]
        public async Task<IActionResult> DeleteJobPositions()
        {
            try
            {
                var jobPositions = await _context.Jobs.ToListAsync();
                _context.Jobs.RemoveRange(jobPositions);
                await _context.SaveChangesAsync();
                return Ok(jobPositions);

                //return NoContent();
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }
    }
}
