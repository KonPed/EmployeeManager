import {Component, EventEmitter, Output} from '@angular/core';
import {MDBModalRef} from 'angular-bootstrap-md';
import {Employee} from '../../model/employee';
import {Subject} from 'rxjs';
import {EmployeeService} from '../../services/employee.service';
import {ModalService} from '../../services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

  action: Subject<any> = new Subject<any>();

  employee: Employee = new Employee();
  content!: any;
  heading!: string;

  constructor(public modalRef: MDBModalRef, private employeeService: EmployeeService, private modalService: ModalService) { }

  onSubmit(employeeDetails: Employee): void {
    this.employee.id = Number(employeeDetails.id);
    this.employee.name = employeeDetails.name;
    this.employee.lastName = employeeDetails.lastName;
    this.employee.jobTitle = employeeDetails.jobTitle;
    this.employee.email = employeeDetails.email;
    this.employee.phone = employeeDetails.phone;
    this.employee.password = employeeDetails.password;
    this.employeeService.addEmployee(this.employee).subscribe(() => {
      this.modalService.employeeAdded();
      this.modalRef.hide();
    });
  }

}
