import {Component, OnInit} from '@angular/core';
import {Employee} from './model/employee';
import {EmployeeService} from './services/employee.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
employees$: Observable<Employee[]>;

constructor(private employeeService: EmployeeService) {
}

ngOnInit() {
  this.employees$ = this.employeeService.getAllEmployees();
}

}
