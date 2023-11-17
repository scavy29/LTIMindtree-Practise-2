import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddMoviesComponent } from './add-movies/add-movies.component';
import { ReactformComponent } from './reactform/reactform.component';
import { DeletemovieComponent } from './deletemovie/deletemovie.component';
// import { ListmovieComponent } from './listmovie/listmovie.component';
// import { FindmovieComponent } from './findmovie/findmovie.component';
// import { EditmovieComponent } from './editmovie/editmovie.component';

const routes: Routes = [
  {path:'add',component:AddMoviesComponent},
  {path:'delete/:id',component:DeletemovieComponent},
  {path:'reactform',component:ReactformComponent}
  // {path:'listmovies',component:ListmovieComponent},
  // {path:'findmovie/:id',component:FindmovieComponent},
  // {path:'edit/:id',component:EditmovieComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }