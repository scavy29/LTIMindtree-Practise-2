import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TempForm } from './TemplateForm/demo.templateform';
import {HttpClientModule} from '@angular/common/http';
import { HttpDemo } from './DemoClientHttp/demohttp.component';
import { HelloWorldService } from './ServiceUtilities/helloworl.service';
import { CommonModule } from '@angular/common';
import { Token } from '@angular/compiler';
import { TokenDemo } from './tokenizationcomponent';
// import { DemoRoute } from './demoRoute.component';

@NgModule({
  declarations: [
    AppComponent,
    TempForm,
    HttpDemo,
    TokenDemo
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [HttpClientModule,HelloWorldService],          //This is a Service
  bootstrap: [AppComponent]
})
export class AppModule { }
