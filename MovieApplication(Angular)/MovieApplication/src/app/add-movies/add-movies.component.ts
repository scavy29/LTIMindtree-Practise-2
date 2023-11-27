import { Component, OnInit } from '@angular/core';
import { MovieserviceService } from '../services/movieservice.service';
import { Imovie } from '../model/imovie';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-movies',
  templateUrl: './add-movies.component.html',
  styleUrls: ['./add-movies.component.css']
})

export class AddMoviesComponent implements OnInit {

moviedata:Imovie = {id:0,name:'',yearrelease:0,rating:0}

  constructor(private ms:MovieserviceService,private route:Router) { }

  saveData(movie:Imovie):void
  {
    this.moviedata = movie
    this.ms.addMovie(this.moviedata).subscribe(     
      ()=>{
      alert('Record Added Successfully')
      this.route.navigate(['/listmovies'])
      }
      )
  }
  ngOnInit() {
  }

}