import { Component, OnInit } from '@angular/core';
import { ScheduleService } from '../services/schedule-service.service';

@Component({
  selector: 'app-schedule-details',
  templateUrl: './schedule-details.component.html',
  styleUrls: ['./schedule-details.component.css']
})
export class ScheduleDetailsComponent implements OnInit {

  items:any[]

  constructor(private s:ScheduleService) { }

  ngOnInit(): void {
    this.s.getSchedules()
  }
}
