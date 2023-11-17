using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Movie_AppWeb.Models;

namespace Movie_AppWeb.Controllers
{
    [Route("api/[controller]")]
        [ApiController]
        public class MovieController : ControllerBase
        {
        //    MovieContext context = new MovieContext();

            private MovieDbContext db;

            public MovieController(MovieDbContext context)
            {
                this.db=context;
            }

            [HttpGet]
            [Route("ListMovies")]
            public IActionResult Get()
            {
                // var data = context.Movies.ToList();
                var data = from m in db.Movies select m;
                return Ok(data);
            }
            [HttpGet]
            [Route("ListMovies/{id}")]
            public IActionResult Get(int id)
            {
                if(id==null)
                {
                    return BadRequest("Id cannot be Null");
                }
                var data = (from m in db.Movies where m.Id==id select m).FirstOrDefault();
                //var data = context.Movies.Find(id);
                if(data==null)
                {
                    return NotFound($"Movie{id} not found");
                }
                return Ok(data);
            }
            [HttpPost]
            [Route("AddMovies")]
            public IActionResult Post(Movie movie)
            {
                if(ModelState.IsValid)
                {
                    try
                    {
                        db.Movies.Add(movie);
                        db.SaveChanges();                        
                    }
                    catch (System.Exception ex)
                    {
                        return BadRequest(ex.InnerException.Message);
                    }
                }
                return Created("Record Added",movie);
            }

            [HttpPut]
            [Route("EditMovies/{id}")]
            public IActionResult Put(int id,Movie movie)
            {
                if(ModelState.IsValid)
                {
                    Movie omovie =db.Movies.Find(id);
                    omovie.Name = movie.Name;
                    omovie.Rating = movie.Rating;
                    omovie.YearRelease =movie.YearRelease;
                    db.SaveChanges();
                    return Ok();
                }
                return BadRequest("Unable ot Edit Record");
            }
            [HttpDelete]
            [Route("DeleteMovie/{id}")]
            public IActionResult Delete (int id)
            {
                try
                {
                    var detail= db.Details.Where(d=>d.MovieId==id);
                    if(detail.Count() !=0)
                    {
                        throw new Exception("Cannot Delete Movies");
                    }
                    var data =db.Movies.Find(id);
                    db.Movies.Remove(data);
                    db.SaveChanges();
                    return Ok();
                }
                catch (System.Exception ex)
                {
                    return BadRequest(ex.Message);
                }
            }
        }   
}