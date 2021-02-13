import {Component, OnInit} from '@angular/core';
import {EmployeeService} from "./services/employee.service";
import {Employee} from "./model/employee";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  employees: Employee[] = [];

  constructor(private employeeService: EmployeeService) {

  }

  ngOnInit() {
    this.getEmployees();
  }

  private getEmployees(): void {
    this.employeeService.getAllEmployees().subscribe((employeesList: Employee[]) => {
      console.log(employeesList);
      this.employees = employeesList;
    }, (error: HttpErrorResponse) => {
      console.log(error.message);
    });
  }
}
