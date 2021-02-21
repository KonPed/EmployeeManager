import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MDBBootstrapModule, MDBModalRef} from 'angular-bootstrap-md';
import {EmployeeCardComponent} from './employee-card/employee-card.component';
import {HttpClientModule} from '@angular/common/http';
import { ModalComponent } from './utilities/modal/modal.component';
import { NavbarComponent } from './navbar/navbar.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeCardComponent,
    ModalComponent,
    NavbarComponent
  ],
  imports: [
    MDBBootstrapModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [MDBModalRef],
  bootstrap: [AppComponent]
})
export class AppModule { }
