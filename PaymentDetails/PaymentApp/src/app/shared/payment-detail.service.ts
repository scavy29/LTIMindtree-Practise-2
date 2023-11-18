import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {
  url:string.apiBaseUrl
  constructor(private http: HttpClient) { }

}
