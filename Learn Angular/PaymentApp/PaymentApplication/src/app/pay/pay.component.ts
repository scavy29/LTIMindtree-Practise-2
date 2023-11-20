import { Component, OnInit } from '@angular/core';
import { PaymentsService } from '../payments.service';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.css']
})
export class PayComponent implements OnInit {
  items: any[];
  newItemNames:string[]=[];
  selectedItemId:number;

  constructor(private pay:PaymentsService) { }

  // ngOnInit() {
  // }

  ngOnInit():void{
    this.loadItems();
  }

  loadItems():void {
    this.pay.getAll().subscribe(data=>{
      this.items=data;
    });
  }
}
