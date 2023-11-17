import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HttpClientModule } from '@angular/common/http';
import { AddMoviesComponent } from './add-movies/add-movies.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ReactformComponent } from './reactform/reactform.component';
import { DeletemovieComponent } from './deletemovie/deletemovie.component';
// import { ListmovieComponent } from './listmovie/listmovie.component';
// import { FindmovieComponent } from './findmovie/findmovie.component';
// import { EditmovieComponent } from './editmovie/editmovie.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AddMoviesComponent,
    ReactformComponent,
    DeletemovieComponent
    // ListmovieComponent,
    // FindmovieComponent,
    // EditmovieComponent,
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