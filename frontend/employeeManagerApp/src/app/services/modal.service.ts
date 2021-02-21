import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  employeeAdded$: Subject<any> = new Subject<any>();
  employeeDeleted$: Subject<any> = new Subject<any>();

  constructor() { }

  public employeeAdded(): void {
    return this.employeeAdded$.next();
  }

  public employeeDeleted(): void {
    return this.employeeDeleted$.next();
  }
}
