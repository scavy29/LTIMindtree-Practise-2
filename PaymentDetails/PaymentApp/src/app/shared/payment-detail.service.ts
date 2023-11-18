import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {
  private url = "https://8080-bdedfececadfabcaaaceeafebecebbffdafdefabcc.premiumproject.examly.io/api/PaymentDetail";
  constructor(private http: HttpClient) { }

  // refreshList()
  // {
  //   let httpheaders : new HttpHeaders({
  //     Accept : 'application/json',
  //   })

  //   this.http.get(this.url , httpheaders)
  //   .subscribe({
  //     next: res=>{
  //       console.log(res);
  //     },
  //     error: err=>{console.log(err)}
  //   })
  // }

  getallpays():Observable<any[]>
  {
    return this.http.get<any[]>(this.url+'/PaymentDetail')
  }
}
