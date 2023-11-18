import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListmovieComponent } from './listmovie/listmovie.component';
import { FindmovieComponent } from './findmovie/findmovie.component';
import { MenuComponent } from './menu/menu.component';
import { HttpClientModule } from '@angular/common/http';
import { AddMoviesComponent } from './add-movies/add-movies.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { EditmovieComponent } from './editmovie/editmovie.component';
import { DeletemovieComponent } from './deletemovie/deletemovie.component';
import { ReactformComponent } from './reactform/reactform.component';

@NgModule({
  declarations: [
    AppComponent,
    ListmovieComponent,
    FindmovieComponent,
    MenuComponent,
    AddMoviesComponent,
    EditmovieComponent,
    DeletemovieComponent,
    ReactformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }