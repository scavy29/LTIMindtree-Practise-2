import { Component, OnInit } from '@angular/core';
import { PaymentsService } from '../payments.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.css']
})
export class PayComponent implements OnInit {
  items: any[];
  selectedItemId:number;

  constructor(private pay:PaymentsService,private r:Router) { }

  // ngOnInit() {
  // }

  ngOnInit():void{
    this.loadItems();
  }

  //Retrieve All Details  
  loadItems():void {
    this.pay.getAll().subscribe(data=>{
      this.items=data;
    });
  }

  //Add Details
  onSubmitPost(postForm:NgForm){
    this.pay.Create(postForm.value);
    console.log("Added Successfully!!!");
  }

  //Fetch Particular ID Details
  selectItem(id:number):void{
    this.selectedItemId=id;
  }
}
