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
    [Route("[controller]")]
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
        [Route("ListAllPayments")]
        public IActionResult ListAllPayments()
        {
            var listofpay=db.PaymentDetails;
            return Ok();
        }

        [HttpPost]
        [Route("CreatePayment")]
        public IActionResult CreatePayment(PaymentDetail pd)
        {
            db.PaymentDetails.Add(pd);
            db.SaveChanges();
            return Ok();
        }

        // [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        // public IActionResult Error()
        // {
        //     return View("Error!");
        // }
    }
}