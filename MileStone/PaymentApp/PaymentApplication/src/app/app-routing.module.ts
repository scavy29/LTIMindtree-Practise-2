import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PayComponent } from './pay/pay.component';
import { ReadComponent } from './read/read.component';
import { createComponent } from '@angular/compiler/src/core';
import { CreateComponent } from './create/create.component';


const routes: Routes = [
  {path:'' , component:PayComponent},
  {path:'create', component:CreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
