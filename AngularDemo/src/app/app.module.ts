import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { TempForm } from './TemplateForm/demo.templateform';
import {HttpClientModule} from '@angular/common/http';
import { HttpDemo } from './DemoClientHttp/demohttp.component';

@NgModule({
  declarations: [
    AppComponent,
    TempForm,
    HttpDemo
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [HttpClientModule],          //This is a Service
  bootstrap: [AppComponent]
})
export class AppModule { }
