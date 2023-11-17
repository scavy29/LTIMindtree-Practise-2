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
import { ApiConnect } from './BackEndConnect/backend.service';
import { CRUD } from './BackEndConnect/backend.component';

// import { DemoRoute } from './demoRoute.component';

@NgModule({
  declarations: [
    AppComponent,
    TempForm,
    HttpDemo,
    TokenDemo,
    ApiConnect,
    CRUD
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [HttpClientModule,HelloWorldService,ApiConnect],          //This is a Service
  bootstrap: [AppComponent]
})
export class AppModule { }
