import {AfterViewInit, Component, OnInit} from '@angular/core';

import {Observable} from "rxjs";
import {EmployeeService} from "./services/employee.service";
import {Employee} from "./model/employee";
import {ModalService} from "./services/modal.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  employees$: Observable<Employee[]> = new Observable<Employee[]>();

  constructor(private employeeService: EmployeeService, private modalService: ModalService) {
  }

  ngOnInit() {
    this.employees$ = this.employeeService.getAllEmployees();
    this.modalService.employeeAdded$.subscribe(() => {
      this.employees$ = this.employeeService.getAllEmployees();
    });
  }

}
