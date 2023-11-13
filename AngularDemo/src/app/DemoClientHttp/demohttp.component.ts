import { Component } from "@angular/core";
import { HttpClient, HttpClientModule } from "@angular/common/http";

@Component({
    selector:'http-client',
    template: `<h1>This is httpclient</h1>`
})
export class HttpDemo{
    _http:HttpClient=null;
    constructor(http:HttpClient){
        this._http=http;
        this._http.get("https://8080-bdedfececadfabcaaaceeafebecebbffdafdefabcc.premiumproject.examly.io/WeatherForecast").subscribe(
        (data)=>{ console.log(data); },
        (failure)=>{ console.log(failure); })
        
    }
}
