import { Component, OnInit } from '@angular/core';
import { MovieserviceService } from '../services/movieservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Imovie } from '../model/imovie';

@Component({
  selector: 'app-editmovie',
  templateUrl: './editmovie.component.html',
  styleUrls: ['./editmovie.component.css']
})
export class EditmovieComponent implements OnInit {

  constructor(private ms:MovieserviceService, private route:Router, private ar:ActivatedRoute) { }
  
  moviedata:Imovie = { id:0, name:'', yearrelease:0, rating:0 }
  
  id:number

  ngOnInit() {
    const tid=this.ar.snapshot.paramMap.get('id')
    this.id=Number(tid)
    this.getMovie(this.id)
  }

  getMovie(id:number){
    this.ms.getMovie(id).subscribe((data:Imovie)=>this.moviedata=data)
  }

  saveData(movie:Imovie)
  {
    this.moviedata=movie
    this.ms.EditMovies(this.moviedata).subscribe(()=>{
      alert("Record Edited")
      this.route.navigate(['/listmovies'])
    })
  }

  
}