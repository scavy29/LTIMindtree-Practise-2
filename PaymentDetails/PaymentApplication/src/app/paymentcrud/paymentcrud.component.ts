import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-paymentcrud',
  templateUrl: './paymentcrud.component.html',
  styleUrls: ['./paymentcrud.component.css']
})
export class PaymentcrudComponent implements OnInit {
  PaymentArray : any[] = [];
  isResultLoaded=false;
  isUpdateFormActive=false;
  
  CardOwnerName:string="";
  CardNumber:string="";
  ExpirationDate:string="";
  SecurityCode:string="";

  PaymentDetailId=""

  constructor(private http:HttpClient) {
    this.getallpayments();
   }

  ngOnInit():void{
  }

  getallpayments()
  {
    this.http.get("https://8080-bdedfececadfabcaaaceeafebecebbffdafdefabcc.premiumproject.examly.io/api/PaymentDetail")
    .subscribe((resultData:any)=>
    {
      this.isResultLoaded=true;
      console.log(resultData);
      this.PaymentArray=resultData;
    });
  }

}
