import { Injectable } from '@angular/core';
import {HttpService} from "./http.service";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpService: HttpService) { }

  public getAllEmployees() {
    return this.httpService.get("/employee/all");
  }

}
