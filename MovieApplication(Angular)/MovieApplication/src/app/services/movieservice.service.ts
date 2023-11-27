import { Injectable } from '@angular/core';
import {Imovie} from '../model/imovie'
import{HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieserviceService {
private url="https://8080-faebfbbfffabcaaaceeafebeccaddbefddaf.premiumproject.examly.io/api/Movie"

  constructor(private httpclient:HttpClient) { }
  getAllMovies():Observable<any[]>
  {
    return this.httpclient.get<any[]>(this.url+'/ListMovies')
  }
  getMovie(id:number):Observable<Imovie>
  {
    return this.httpclient.get<Imovie>(this.url+'/ListMovies/'+id)
  }
  
  httpOptions={headers:new HttpHeaders({'Content-type':'application/json'})}
  
  addMovie(moviedata:Imovie):Observable<Imovie>
  {
    return this.httpclient.post<Imovie>(this.url+'/AddMovies',moviedata,this.httpOptions)
  }

  EditMovies(moviedata:Imovie):Observable<Imovie>
  {
    return this.httpclient.put<Imovie>(this.url+ '/EditMovies/'+ moviedata.id,moviedata,this.httpOptions)
  }
  DeleteMovie(id:number):Observable<Imovie> 
  {
    return this.httpclient.delete<Imovie>(this.url+'/DeleteMovie'+ id)
  }
}