import { Component, OnInit } from '@angular/core';
import {MovieserviceService} from '../services/movieservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Imovie } from '../model/imovie';
 
@Component({
  selector: 'app-deletemovie',
  templateUrl: './deletemovie.component.html',
  styleUrls: ['./deletemovie.component.css']
})
export class DeletemovieComponent implements OnInit {
 
  constructor(private ms:MovieserviceService,private route:Router,private ar:ActivatedRoute) { }
  moviedata:Imovie={id:0,name:'',yearrelease:0,rating:0}
  id:number
    ngOnInit() {
      const tid=this.ar.snapshot.paramMap.get('id')
      this.id=Number(tid)
      this.getMovie(this.id)
    }
  getMovie(id:number)
  {
    this.ms.getMovie(id).subscribe((data:Imovie)=>this.moviedata = data)
  }
  deleteData(movie:Imovie)
  {
    this.moviedata=movie
    this.ms.DeleteMovie(this.moviedata.id).subscribe(()=>
    {
      alert("Record Deleted")
      this.route.navigate(['/listmovies'])
    })
  }
}