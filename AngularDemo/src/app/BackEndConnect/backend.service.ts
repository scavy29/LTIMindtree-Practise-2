import { Injectable } from "@angular/core";
import { HttpClient, HttpClientModule, HttpHeaders } from "@angular/common/http";
import { error } from "console";
 
 
// import {}
 
@Injectable({
    providedIn : 'root'
})
 
export class ApiConnect{
    constructor(private http:HttpClient)
    {
 
    }
 
    SaveData(data:any) //to create row
    {
        let responseData:any = "";
        let httpheaders : HttpHeaders = new HttpHeaders({
            Accept : 'application/json'
        })
        this.http.post("https://8080-efecefcbfdfabcaaaceeafebeccaddbefddaf.premiumproject.examly.io/api/Department/Create" , data , {headers:httpheaders})
        .subscribe(res=> // this will check
            {
                responseData=res;
            },
            error=>{
                responseData=error;
            }
            )
            return responseData;
    }
 
    UpdateData(id:number)
    {
 
    }
}