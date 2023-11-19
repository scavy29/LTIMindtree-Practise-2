import { Component, OnInit } from '@angular/core';
import { PaymentsService } from '../payments.service';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.css']
})
export class PayComponent implements OnInit {
  items: any[];

  constructor(private pay:PaymentsService) { }

  // ngOnInit() {
  // }
  ngOnInit():void {
    this.pay.getAll().subscribe(data=>{
      this.items=data;
    });
  }

}
