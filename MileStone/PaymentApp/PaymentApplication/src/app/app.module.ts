import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PayComponent } from './pay/pay.component';
import { FormsModule } from '@angular/forms';
import { ReadComponent } from './read/read.component';
import { CreateComponent } from './create/create.component';
import { PaymentsService } from './payments.service';
import { DeleteidComponent } from './deleteid/deleteid.component';



@NgModule({
  declarations: [
    AppComponent,
    PayComponent,
    ReadComponent,
    CreateComponent,
    DeleteidComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
