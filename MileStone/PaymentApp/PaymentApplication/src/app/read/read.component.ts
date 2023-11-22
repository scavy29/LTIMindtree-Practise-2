import { Component, OnInit } from '@angular/core';
import { PaymentsService } from '../payments.service';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {
  items:any[];
  constructor(private p:PaymentsService) { }

  ngOnInit() {
    this.loadItems();
  }

  loadItems():void{
    this.p.getAll().subscribe(data=>{
      this.items=data;
    });
  }
}
