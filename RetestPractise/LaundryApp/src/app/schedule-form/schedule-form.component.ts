import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ScheduleService } from '../services/schedule-service.service';
// ScheduleService

@Component({
  selector: 'app-schedule-form',
  templateUrl: './schedule-form.component.html',
  styleUrls: ['./schedule-form.component.css']
})
export class ScheduleFormComponent implements OnInit {

  list:any[]

  constructor(private fb:FormBuilder,private s:ScheduleService) { }

  
  ngOnInit() {
  }
  
  onSubmit(){}

}
