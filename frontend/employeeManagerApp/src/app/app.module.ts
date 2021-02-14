import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MDBBootstrapModule, MDBModalRef} from "angular-bootstrap-md";
import {EmployeeCardComponent} from "./employee-card/employee-card.component";
import {HttpClientModule} from "@angular/common/http";
import { ModalComponent } from './utilities/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeCardComponent,
    ModalComponent
  ],
  imports: [
    MDBBootstrapModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [MDBModalRef],
  bootstrap: [AppComponent]
})
export class AppModule { }
