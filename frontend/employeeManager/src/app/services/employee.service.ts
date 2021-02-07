import { Injectable } from '@angular/core';
import {WebService} from "./web.service";
import {Observable} from "rxjs";
import {Employee} from "../model/employee";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private webService: WebService) { }

  public getAllEmployees(): Observable<Employee[]> {
    return this.webService.get("/employee/all");
  }

}
