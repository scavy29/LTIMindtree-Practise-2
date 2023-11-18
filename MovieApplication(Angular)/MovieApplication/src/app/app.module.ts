import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddMoviesComponent } from './add-movies/add-movies.component';
import { DeletemovieComponent } from './deletemovie/deletemovie.component';

@NgModule({
  declarations: [
    AppComponent,
    AddMoviesComponent,
    DeletemovieComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
