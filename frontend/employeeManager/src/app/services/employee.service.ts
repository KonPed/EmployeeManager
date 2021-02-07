import { Injectable } from '@angular/core';
import {WebService} from "./web.service";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private webService: WebService) { }

  public getAllEmployees() {
    return this.webService.get("/employee/all");
  }

}
