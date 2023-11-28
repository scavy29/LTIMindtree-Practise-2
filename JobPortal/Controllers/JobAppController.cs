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
        public IActionResult UpdateJob(int id,Job j)
        {
            try
            {
                var updjob = _context.Jobs.Find(id);

                if (updjob == null)
                {
                    return NotFound($"Job with {id} not found.");
                }
                _context.SaveChanges();
                return Ok(updjob);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }

        //GET: api/Job
        [HttpGet]
        [Route("GetJobPositions")]
        public async Task<IActionResult> GetJobPositions()
        {
            try
            {
                var jobs = await _context.Jobs.ToListAsync();
                return Ok(jobs);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }

        // GET: api/Job/JobTitle
        [HttpGet]
        [Route("GetJobTitle")]
        public IActionResult GetJobTitle()
        {
            try
            {
                var positionTitles = _context.Jobs.Select(j => j.Title).ToList();
                return Ok(positionTitles);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }

        //POST: api/Job
        [HttpPost]
        [Route("AddJob")]
        public async Task<IActionResult> AddJob([FromBody] Job j)
        {
            try
            {
                if (j == null)
                {
                    return BadRequest("Job position data is invalid.");
                }

                _context.Job.Add(j);
                await _context.SaveChangesAsync();

                return Ok(j);
                //return CreatedAtAction("GetJobPosition", new { id = jobPosition.Id }, jobPosition);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }

    
        // [HttpDelete("positions/delete")]
        // public async Task<IActionResult> DeleteJobPositions()
        // {
        //     try
        //     {
        //         var jobPositions = await _context.JobPositions.ToListAsync();
        //         _context.JobPositions.RemoveRange(jobPositions);
        //         await _context.SaveChangesAsync();
        //         return Ok(jobPositions);

        //         //return NoContent();
        //     }
        //     catch (Exception ex)
        //     {
        //         return StatusCode(500, $"Internal server error: {ex.Message}");
        //     }
        // }
    }
}