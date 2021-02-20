import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  employeeAdded$: Subject<any> = new Subject<any>();

  constructor() { }

  public employeeAdded() {
    return this.employeeAdded$.next();
  }
}
