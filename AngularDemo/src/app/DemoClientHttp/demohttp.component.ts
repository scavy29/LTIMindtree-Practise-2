import { Component } from "@angular/core";
import { HttpClient, HttpClientModule } from "@angular/common/http";

@Component({
    selector:'http-client',
    template:`<h1>This is httpclient</h1>`
})
export class HttpDemo{
    _http:HttpClient=null;
    constructor(http:HttpClientModule){
        this._http=http;
        this._http.get("http:0.0.0.0:8080/");
    }

}