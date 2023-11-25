import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestestService {
  private url="https://8080-bdedfececadfabcaaaceeafebecebbffdafdefabcc.premiumproject.examly.io/api"

  constructor(private http:HttpClient) { }

  getAllSchedules():Observable<any[]>{
    return this.http.get<any[]>(this.url+'/laundry/schedules');
  }

  getAllPackages():Observable<any[]>{
    return this.http.get<any[]>(this.url+'/laundry/packages');
  }

  getAllStatus():Observable<any[]>{
    return this.http.get<any[]>(this.url+'/laundry/status');
  }
}
