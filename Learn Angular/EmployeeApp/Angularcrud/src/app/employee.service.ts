import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  url = 'https://8080-bdedfececadfabcaaaceeafebecebbffdafdefabcc.premiumproject.examly.io/Api/Employee'
  
  constructor(private http:HttpClient) { }
  
  getAllEmployee(): Observable<Employee[]>{
    return this.http.get<Employee[]>(this.url+'/GetEmployee');
  }

  getEmployeeById(employeeId: string): Observable<Employee>{
    return this.http.get<Employee>(this.url+'/GetEmployeeById' + employeeId);
  }
  
  createEmployee(employee: Employee): Observable<Employee>{
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type':'applications/json'})};
    return this.http.post<Employee>(this.url + '/AddEmployee',employee, httpOptions);
  }

  updateEmployee(employee: Employee): Observable<Employee>{
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type':'application/json'})};
    return this.http.put<Employee>(this.url + '/UpdateEmployee',employee, httpOptions);
  }

  deleteEmployeeById(employeeid: string): Observable<number>{
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type':'application/json'})};
    return this.http.put<number>(this.url + '/DeleteEmployee?id' + employeeid, httpOptions);
  }

}

