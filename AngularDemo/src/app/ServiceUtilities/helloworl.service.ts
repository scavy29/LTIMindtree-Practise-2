import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'
})

export class HelloWorldService{
    sayHellowWorld(){
        return "Hello World";
    }
}
