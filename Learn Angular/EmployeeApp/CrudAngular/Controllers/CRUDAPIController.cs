using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using CrudAngular.Models;

namespace CrudAngular.Controllers
{
    [ApiController]
    // [Route("api/[controller]")]
    [Route("Api/Employee")]
    public class CRUDAPIController : ControllerBase
    {
        private AppDbContext db;
        public CRUDAPIController(AppDbContext _context)
        {
            this.db=_context;
        }
        
        //GetAllEmployees
        [HttpGet]
        [Route("GetEmployee")]
        public IActionResult GetEmployee()
        {
            return Ok(db.Employees);
        }

        //GetEmployeeWithID
        [HttpGet]
        [Route("GetEmployeeById/{id}")]
        public IActionResult GetEmployeeById(int id)
        {
            var e=db.Employees.Find(id);
            if(e!=null)
            {
                return Ok(e);
            }
            return NotFound();
        }

        //Add an Employee
        [HttpPost("AddEmployee")]
        public IActionResult AddEmployee(Employee e)
        {
            if(!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            db.Employees.Add(e);
            db.SaveChanges();
            return Ok(e);
        }

        //Update an Employee
        [HttpPut("UpdateEmployee/{id}")]
        public IActionResult UpdateEmployee(int id,Employee emp)
        {
            var e=db.Employees.Find(id);
            if(e!=null)
            {
                e.EmpName=emp.EmpName;
                e.DateOfBirth=emp.DateOfBirth;
                e.EmailId=emp.EmailId;
                e.Gender=emp.Gender;
                e.Address=emp.Address;
                e.pinCode=emp.pinCode;
                db.SaveChanges();
                return Ok(emp);
            }
            return NotFound();
        }

        //Delete an Employee
        [HttpDelete("DeleteEmployee/{id}")]
        public IActionResult DeleteEmployee(int id)
        {
            var e=db.Employees.Find(id);
            if(e!=null)
            {
                db.Employees.Remove(e);
                db.SaveChanges();
                return Ok(e);
            }
            return BadRequest();
        }
    }
}