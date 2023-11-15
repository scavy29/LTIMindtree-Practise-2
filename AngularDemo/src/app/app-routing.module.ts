import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemoRoute } from './demoRoute.component';


const routes: Routes = [
  {path: '' , component:DemoRoute  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }