using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
 
namespace JobPortal.Models
{
    public class Application
    {
        [Key]
        public int ApplicationID {get;set;}
 
        [Required]
        [StringLength(100)]
        public string ApplicationName {get;set;}
 
        [Required]
        public string ContactNumber {get;set;}
 
        [Required]
        public string MailID {get;set;}
 
        [Required]
        public string JobTitle {get;set;}
 
        [Required]
        [StringLength(20)]
        public string Status {get;set;}
       
        // [ForeignKey("JobTitle")]
        public Job? Job {get;set;}
    }
}