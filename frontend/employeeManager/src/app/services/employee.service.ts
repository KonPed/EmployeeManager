import { Injectable } from '@angular/core';
import {WebService} from "./web.service";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpService: WebService) { }

  public getAllEmployees() {
    return this.httpService.get("/employee/all");
  }

}
