import { Injectable } from '@angular/core';
import {WebService} from './web.service';
import {Observable} from 'rxjs';
import {Employee} from '../model/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private webService: WebService) { }

  /**
   * GET
   * getAllEmployees
   * return a list of all Employees.
   */
  public getAllEmployees(): Observable<Employee[]> {
    return this.webService.get('/employee/all');
  }

  /**
   * POST
   * addEmployee
   * Add a new Employee in the database.
   */
  public addEmployee(employee: Employee) {
    return this.webService.post('/employee/add', employee);
  }

}
