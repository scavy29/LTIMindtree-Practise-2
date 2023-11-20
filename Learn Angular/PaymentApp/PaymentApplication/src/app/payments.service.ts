import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentsService {
  private url='https://8080-bdedfececadfabcaaaceeafebecebbffdafdefabcc.premiumproject.examly.io/api/PaymentDetail';

  constructor(private http:HttpClient) { }

  getAll(): Observable<any[]> {
    return this.http.get<any[]>(this.url+'/GetPaymentDetail');
  }

  // get(id: number): Observable<any> {
  //   return this.http.get<any>(`${this.url}/${id}`);
  // }

  // create(data: any): Observable<any> {
  //   return this.http.post<any>(this.url, data);
  // }

  // update(id: number, data: any): Observable<any> {
  //   return this.http.put<any>(`${this.url}/${id}`, data);
  // }

  // delete(id: number): Observable<any> {
  //   return this.http.delete<any>(`${this.url}/${id}`);
  // }

  Create(data:any){
    let httpHeader:HttpHeaders=new HttpHeaders({
      Accept:"application/json"
    })

    return this.http.post("https://8081-abbcbfeabdfabcaaaceeafebeccaddbefddaf.premiumproject.examly.io/api/PaymentDetail/PostPaymentDetail",data,{headers:httpHeader});
  }
}
