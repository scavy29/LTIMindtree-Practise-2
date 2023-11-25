import { Component, OnInit } from '@angular/core';
import { RestestService } from '../restest.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  alldet:any

  constructor(private r:RestestService) { }

  ngOnInit() {
    this.loadAll();
  }

  loadAll():void{
    this.r.getAllPackages().subscribe(
      data=>{
        this.alldet=data;
      }
    )
    this.r.getAllSchedules().subscribe(
      data=>{
        this.alldet=data;
      }
    )
  }
}
