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
  selectedItemDetails:any;
  inputItemId:number;
  idNotFound:boolean=false;

  deleteItemId:number;

  updateItemId:number;
  updatedData:any={};

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

  //Details using ID
  selectItem(id:number):void{
    // this.selectedItemId=id;
    this.pay.getDetailsById(id).subscribe((details)=>{
      this.selectedItemDetails=details;
    });
  }

  fetchDetails(): void {
    if (this.inputItemId) {
      this.pay.getDetailsById(this.inputItemId).subscribe((details) => {
        this.selectedItemDetails = details;
      },
      (error)=>{
        this.idNotFound=true;
        console.error('Not found',error);
      }
      );
    }
  }

  //Delete using Id
  deleteItem():void{
    if(this.deleteItemId){
      this.pay.deleteById(this.deleteItemId).subscribe(
        ()=>{
          console.log('Item Delete Successfully!!!');
        },
        (error)=>{
          console.error('Error deleting',error);
        }
      )
    }
  }

  //Update Details using Id
  // updateDetails():void{
  //   if(this.updateItemId && Object.keys(this.updatedData).length>0){
  //     this.pay.UpdateById(this.updateItemId,this.updatedData).subscribe(
  //       ()=>{
  //         console.log('Details Updated');
  //       },
  //       (error)=>{
  //         console.error('Error Update');
  //       }
  //     );
  //   }
  // }
  fetchAndUpdateDetails(): void {
    if (this.updateItemId) {
      this.pay.getDetailsById(this.updateItemId).subscribe(
        (details) => {
          this.selectedItemDetails = details;
          this.idNotFound = false; // Reset the flag

          // Optionally, you can pre-fill the form fields with existing details
          this.updatedData.name = this.selectedItemDetails.name;
          // Add other properties as needed

          // Perform the update immediately after fetching details
          this.performUpdate();
        },
        (error) => {
          this.idNotFound = true; // Set the flag when an error occurs
          console.error('Error fetching details:', error);
        }
      );
    }
  }

  performUpdate(): void {
    if (this.updateItemId && Object.keys(this.updatedData).length > 0) {
      this.pay.UpdateById(this.updateItemId, this.updatedData).subscribe(
        () => {
          console.log('Details updated successfully');
          // Optionally, update your UI or perform other actions after update
          this.selectedItemDetails = null; // Reset details after update
          this.updatedData = {}; // Reset updated data
        },
        (error) => {
          console.error('Error updating details:', error);
          // Optionally, display an error message or handle the error appropriately
        }
      );
    }
  }
}
