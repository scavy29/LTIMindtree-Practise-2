import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemoRoute } from './demoRoute.component';
import { ReactiveForm } from './ReactiveForm/reactiveForm.component';


const routes: Routes = [
  {path: '' , component:DemoRoute  },
  {path:'reactive',component:ReactiveForm}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }