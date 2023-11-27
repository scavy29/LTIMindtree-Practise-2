import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  // templateUrl: './menu.component.html',
  templateUrl:`<h1>message</h1>`,
  // styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  message:"Hello"
  constructor() { }

  ngOnInit() {
  }

}