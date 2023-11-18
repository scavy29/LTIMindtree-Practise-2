import { Component, OnInit } from '@angular/core';
import { MovieserviceService } from '../services/movieservice.service';



@Component({
  selector: 'app-listmovie',
  templateUrl: './listmovie.component.html',
  styleUrls: ['./listmovie.component.css']
})
export class ListmovieComponent implements OnInit {

  moviedata : any[] = []
  
  constructor(private ms:MovieserviceService) 
  {
     this.ms.getAllMovies().subscribe(data=>{this.moviedata.push(...data)})
     console.log(this.moviedata)
  }

  ngOnInit() {
  }

}