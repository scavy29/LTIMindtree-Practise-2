import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {
  private url = "https://8080-bdedfececadfabcaaaceeafebecebbffdafdefabcc.premiumproject.examly.io/api/PaymentDetail";
  constructor(private http: HttpClient) { }

  refreshList()
  {
    this.http.get(this.url)
    .subscribe({
      next: res=>{
        console.log(res);
      },
      error: err=>{console.log(err)}
    })
  }
}
