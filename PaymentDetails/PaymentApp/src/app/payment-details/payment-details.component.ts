import { Component, OnInit } from '@angular/core';
import { PaymentDetailService } from '../shared/payment-detail.service';

// npx -p @angular/cli@8 ng new

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styleUrls: ['./payment-details.component.css']
})
export class PaymentDetailsComponent implements OnInit {

  constructor(public service:PaymentDetailService) {   
  }

  ngOnInit():void{
    console.log(this.service.getallpays());
  }

}
