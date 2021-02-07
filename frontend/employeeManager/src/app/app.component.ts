import {Component, OnInit} from '@angular/core';
import {EmployeeService} from "./services/employee.service";
import {Employee} from "./model/employee";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
   employeesList: any;

  constructor(private employeeService: EmployeeService) {
  }

  ngOnInit() {
    this.employeeService.getAllEmployees().subscribe((employeesList: Employee[]) => {
      this.employeesList = employeesList;
    });
  }

}
