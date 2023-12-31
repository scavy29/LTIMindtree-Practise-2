using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;

namespace JobPortal.Models
{
    public class Job
    {
        [Key]
        public int JobID {get;set;}
 
        [Required]
        [StringLength(100)]
        public string JobTitle {get;set;}
 
        [Required]
        [StringLength(100)]
        public string Department {get;set;}
 
        [Required]
        [StringLength(100)]
        public string Location {get;set;}
 
        [Required]
        public string Responsibility {get;set;}
 
        [Required]
        public string Qualification {get;set;}
 
        [Required]
        [DataType(DataType.Date)]
        public DateTime DeadLine {get;set;}
 
        [Required]
        public string Category {get;set;}   // free job or premium job
 
        // Reference to related job applications
        // [InverseProperty("Job")]
        public ICollection<Application>? Applications {get;set;}
    }
}