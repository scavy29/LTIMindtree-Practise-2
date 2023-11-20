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

  createItems():void{
    console.log("Called CreateItems");
    if(this.newItemNames && this.newItemNames.length>0)
    {
      const newItems=this.newItemNames.map(name=>({name}));

      this.pay.create(newItems).subscribe(()=>{
        this.loadItems();
        this.newItemNames=Array(this.newItemNames.length).fill('');
      });
    }
  }

}
