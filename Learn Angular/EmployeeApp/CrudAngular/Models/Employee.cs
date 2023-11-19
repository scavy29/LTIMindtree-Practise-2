using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace CrudAngular.Models
{
    public class Employee
    {
        [Key]
        public int EmpId{get;set;}
        public string? EmpName{get;set;}
        public DateTime DateOfBirth{get;set;}
        public string? EmailId{get;set;}
        public string? Gender{get;set;}
        public string? Address{get;set;}
        public string? pinCode{get;set;}
    }
}