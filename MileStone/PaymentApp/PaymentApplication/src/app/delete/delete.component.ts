import { Component, OnInit } from '@angular/core';
import { PaymentsService } from '../payments.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  deleteItemId:number;
  item:any[];
  constructor(private p:PaymentsService) { }

  ngOnInit() {
  }

  // deleteItem():void{
  //   if(this.deleteItemId){
  //     this.p.deleteById(this.deleteItemId).subscribe(
  //       ()=>{
  //         console.log('Item Delete Successfully!!!');
  //       },
  //       (error)=>{
  //         console.error('Error deleting',error);
  //       }
  //     )
  //   }
  // }

  loadData(){
    this.p.getDetailsById()
  }
  deleteItem(delitemid:number){
    if(this.deleteItemId){
      this.data
  }
}
