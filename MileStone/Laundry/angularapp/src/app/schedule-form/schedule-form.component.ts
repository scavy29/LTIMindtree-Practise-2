// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup } from '@angular/forms';
// import { ScheduleService } from '../services/schedule-service.service';
// import { ActivatedRoute, Router } from '@angular/router';
// import { Userschedule } from 'src/models/userschedule.model';

// @Component({
//   selector: 'app-schedule-form',
//   templateUrl: './schedule-form.component.html',
//   styleUrls: ['./schedule-form.component.css']
// })
// export class ScheduleFormComponent implements OnInit {
//   // scheduleForm : FormBuilder
//   // userschedule : Userschedule
//   scheduleForm=this.fb.group({
//     fullName:[''],
//     mobileNumber:[''],
//     email:[''],
//     address:[''],
//     area:[''],
//     pincode:[''],
//     pickupDay:[''],
//     pickupTimeSlot:[''],
//     packageId:['']
//   })

//   constructor(private ss : ScheduleService , private fb: FormBuilder ) { }

  

//   ngOnInit(): void {
//   }
  
//   // onSubmit() : void {
//   // this.userschedule = this.scheduleForm.value
//   // this.ss.createSchedule(this.userschedule).subscribe(
//   //   () => {
//   //     alert("Schedule created Successfully");
      

//   // });

//   // }
//   onSubmit() : void {

//   }

// }





import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ScheduleService } from '../services/schedule-service.service';
 
@Component({
  selector: 'app-schedule-form',
  templateUrl: './schedule-form.component.html',
  styleUrls: ['./schedule-form.component.css']
})
export class ScheduleFormComponent implements OnInit {
 
  constructor(private fb:FormBuilder,private ss:ScheduleService) { }
  scheduleForm=this.fb.group({
    fullName:[''],
    mobileNumber:[''],
    email:[''],
    address:[''],
    area:[''],
    pincode:[''],
    pickupDay:[''],
    pickupTimeSlot:[''],
    packageId:['']
  })
  onSubmit(){
 
  }
 
  ngOnInit(): void {
 
 
  }
 
}
 

