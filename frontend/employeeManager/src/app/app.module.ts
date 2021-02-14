import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MdbModule } from 'mdb-angular-ui-kit';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {EmployeeCardComponent} from './employee-card/employee-card.component';
import {EmployeeService} from './services/employee.service';
import {WebService} from './services/web.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeCardComponent
  ],
  imports: [
    BrowserModule,
    MdbModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [WebService, EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
