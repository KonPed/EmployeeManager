import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {EmployeeService} from "../services/employee.service";
import {Employee} from "../model/employee";
import {switchMap} from "rxjs/operators";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  employee: Employee = new Employee();

  @Output()
  employeeAdded: EventEmitter<any> = new EventEmitter();
  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
  }

  onSubmit(employeeDetails: Employee) {
    this.employee.name = employeeDetails.name;
    this.employee.lastName = employeeDetails.lastName;
    this.employee.jobTitle = employeeDetails.jobTitle;
    this.employee.email = employeeDetails.email;
    this.employee.phone = employeeDetails.phone;
    this.employee.password = employeeDetails.password;
    console.log(employeeDetails);
    this.employeeService.addEmployee(this.employee).subscribe(() => {
      this.employeeAdded.emit();
    });
  }

}
