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
   * @param employee
   * Add a new Employee in the database.
   */
  public addEmployee(employee: Employee): Observable<Employee> {
    return this.webService.post('/employee/add', employee);
  }

  /**
   * POST
   * deleteEmployee
   * @param employee
   * Delete an existing employee from the database.
   */
  public deleteEmployee(employee: Employee): Observable<Employee> {
    return this.webService.delete(`/employee/delete/${employee.id}`);
  }

}
