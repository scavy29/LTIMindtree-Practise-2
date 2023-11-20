import { Component, OnInit } from '@angular/core';
import { PaymentsService } from '../payments.service';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.css']
})
export class PayComponent implements OnInit {
  items: any[];
  newItemName:string='';
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

  CreateItem():void{
    if(this.newItemName)
    {
      const newItem={name:this.newItemName};
      this.pay.create(newItem).subscribe(()=>{
        this.loadItems();
        this.newItemName='';
      });
    }
  }
  
}
