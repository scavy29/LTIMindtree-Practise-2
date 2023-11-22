import { Component, OnInit } from '@angular/core';
import { PaymentsService } from '../payments.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private p:PaymentsService,private r:Router) { }

  ngOnInit() {
  }

  onSubmitPost(postForm:NgForm){
    this.p.Create(postForm.value).
    subscribe(()=>{
      this.r.navigate(['read']);
    })
  }

}
