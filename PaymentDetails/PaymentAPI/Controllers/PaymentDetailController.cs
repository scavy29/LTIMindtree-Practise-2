using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using PaymentAPI.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace PaymentAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PaymentDetailController : ControllerBase
    {
        // private readonly ILogger<PaymentDetailController> _logger;

        // public PaymentDetailController(ILogger<PaymentDetailController> logger)
        // {
        //     _logger = logger;
        // }

        private PaymentDetailContext db;
        public PaymentDetailController(PaymentDetailContext _context)
        {
            this.db=_context;
        }

        [HttpGet]
        public IActionResult GetPaymentDetail()
        {
            if(db.PaymentDetails==null)
            {
                return NotFound();
            }
            return Ok(db.PaymentDetails);
        }

        [HttpGet("{id}")]
        public IActionResult GetPaymentDetail(int id)
        {
            if(db.PaymentDetails==null)
            {
                return NotFound();
            }
            var gpd=db.PaymentDetails.Find(id);
            if(gpd==null)
            {
                return NotFound();
            }   
            return Ok(gpd);
        }

        [HttpPost]
        public IActionResult PostPaymentDetail(PaymentDetail pd)
        {
            if(db.PaymentDetails==null)
            {
                return NotFound();
            }
            db.PaymentDetails.Add(pd);
            db.SaveChanges();
            return Ok();
        }

        [HttpPut("{id}")]
        public IActionResult UpdatePaymentDetail(int id,PaymentDetail pd)
        {
            var u=db.PaymentDetails.FirstOrDefault(c=>c.PaymentDetailId==id);
            if(u!=null)
            {
                db.PaymentDetails.Update(u);
                db.SaveChanges();
                return Ok();
            }
            return NotFound();
        }

        [HttpDelete("{id}")]
        public IActionResult DeletePaymentDetail(int id)
        {
            var pd=db.PaymentDetails.Find(id);
            if(pd!=null)
            {
                db.Remove(pd);
                db.SaveChanges();
                return Ok();
            }
            return NotFound();
        }

        // [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        // public IActionResult Error()
        // {
        //     return View("Error!");
        // }
    }
}