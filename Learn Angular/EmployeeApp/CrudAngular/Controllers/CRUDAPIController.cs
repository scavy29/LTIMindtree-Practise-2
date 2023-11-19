using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using CrudAngular.Models;

namespace CrudAngular.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CRUDAPIController : ControllerBase
    {
        private AppDbContext db;
        public CRUDAPIController(AppDbContext _context)
        {
            this.db=_context;
        }
        
        //GetAllEmployees
        [HttpGet]
        public IActionResult GetEmployee()
        {
            return Ok(db.Employees);
        }

        //GetEmployeeWithID
        [HttpGet]
        [Route("GetEmployeeById/{id}")]
        public IActionResult GetEmployeeById(int empid)
        {
            var e=db.Employees.Find(empid);
            if(e!=null)
            {
                return Ok(e);
            }
            return NotFound();
        }

        //Add an Employee
        [HttpPost]
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
        [HttpPut]
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

        [HttpDelete]
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