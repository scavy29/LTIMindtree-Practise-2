import { Component, OnInit } from '@angular/core';
import { ScheduleService } from '../services/schedule-service.service';

@Component({
  selector: 'app-schedule-details',
  templateUrl: './schedule-details.component.html',
  styleUrls: ['./schedule-details.component.css']
})
export class ScheduleDetailsComponent implements OnInit {
  schedules:any[]
  packageOptions:any[]
  statusOptions:any[]
  items:any[]
  scheduleId:number
  statusId:number

  constructor(private s:ScheduleService) { }

  ngOnInit(): void {
    this.s.getSchedules()
    .subscribe(
      data=>{this.schedules=data}
    )
    this.s.getPackages()
    .subscribe(
      data=>{this.packageOptions=data}
    )
    this.s.getStatuses()
    .subscribe(
      data=>{this.statusOptions=data}
    )
  }
}
