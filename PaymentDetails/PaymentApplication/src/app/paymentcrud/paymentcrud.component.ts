import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
// import {}

@Component({
  selector: 'app-paymentcrud',
  templateUrl: './paymentcrud.component.html',
  styleUrls: ['./paymentcrud.component.scss']
})
export class PaymentCrudComp {
  StudentArray : any[] = [];
  isResultLoaded = false;
  isUpdateFormActive = false;

  stname: string ="";
  course: string ="";
 
  currentStudentID = "";

  constructor(private http: HttpClient ) 
  {
    this.getAllPayments();
  }

  ngOnInit(): void {
  }

  getAllPayments()
  { 
    this.http.get("https://8080-bdedfececadfabcaaaceeafebecebbffdafdefabcc.premiumproject.examly.io/api/PaymentDetail")
    .subscribe((resultData: any)=>
    {
        this.isResultLoaded = true;
        console.log(resultData);
        this.PaymentArray = resultData;
    });
  }

  // register()
  // {
  //  // this.isLogin = false; 
  //  // alert("hi");
  //   let bodyData = {
  //     "stname" : this.stname,
  //     "course" : this.course,
    
  //   };

    // this.http.post("https://localhost:7195/api/Student/AddStudent",bodyData).subscribe((resultData: any)=>
    // {
    //     console.log(resultData);
    //     alert("Payment Registered Successfully")
    //     this.getAllPa();
      //  this.name = '';
      //  this.address = '';
      //  this.mobile  = 0;
  //   });
  // }

  setUpdate(data: any) 
  {
   this.CardOwnerName = data.CardOwnerName;
   this.CardNumber = data.CardNumber;
   this.ExpirationDate = data.ExpirationDate;
   this.SecurityCode=data.SecurityCode
  }

  // UpdateRecords()
  // {
  //   let bodyData = 
  //   {
  //     "stname" : this.stname,
  //     "course" : this.course,
  //   };
    
  //   this.http.patch("https://localhost:7195/api/Student/UpdateStudent"+ "/"+ this.currentStudentID,bodyData).subscribe((resultData: any)=>
  //   {
  //       console.log(resultData);
  //       alert("Student Registered Updateddd")
  //       this.getAllStudent();
      
  //   });
  // }
 
  save()
  {
    if(this.PaymentDetailId == '')
    {
        this.register();
    }
      else
      {
       this.UpdateRecords();
      }       
  }


  // setDelete(data: any)
  // {
  //   this.http.delete("https://localhost:7195/api/Student/DeleteStudent"+ "/"+ data.id).subscribe((resultData: any)=>
  //   {
  //       console.log(resultData);
  //       alert("Student Deletedddd")
  //       this.getAllStudent();
  //   });
  // }
}