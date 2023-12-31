using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;


namespace Movie_AppWeb.Models
{
    public class Movie
    {
        [Key]
        public int Id {get;set;}
        [Required]
        public string Name{get;set;}
        public int YearRelease{get;set;}
        public int Rating{get;set;}
        public ICollection<Detail> ? Details{get;set;}   
    }
}