import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { HelloWorldService } from "./ServiceUtilities/helloworl.service";

@Component({
    selector : "demoRoute",
    template : `<h1>Hello World to salonka</h1>`
})

export class DemoRoute{
      constructor(private route:Router,private hello:HelloWorldService)
      {

      } 
      
      handleRoute(){
        this.hello.sayHellowWorld();
        this.route.navigate(["/form",23]);
      }
}
