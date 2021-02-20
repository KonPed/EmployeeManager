import {AfterViewInit, Component, OnInit} from '@angular/core';

import {Observable} from "rxjs";
import {EmployeeService} from "./services/employee.service";
import {Employee} from "./model/employee";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  employees$: Observable<Employee[]> = new Observable<Employee[]>();

  constructor(private employeeService: EmployeeService) {
  }

  ngOnInit() {
    this.employees$ = this.employeeService.getAllEmployees();
  }

  public onEmployeeAdded(event: any) {
    this.employees$ = this.employeeService.getAllEmployees();
  }

}
