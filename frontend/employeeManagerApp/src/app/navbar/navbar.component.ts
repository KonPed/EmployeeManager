import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {EmployeeService} from "../services/employee.service";
import {Employee} from "../model/employee";
import {ModalComponent} from "../utilities/modal/modal.component";
import {MDBModalService} from "angular-bootstrap-md";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  employee: Employee = new Employee();
  modalOptions: any;

  constructor(private employeeService: EmployeeService, private mdbModalService: MDBModalService) { }

  ngOnInit(): void {
  }

  openModal(mode: string, employee?: Employee): void {
    this.modalOptions = {
      backdrop: true,
      keyboard: true,
      focus: true,
      show: false,
      ignoreBackdropClick: false,
      class: '',
      containerClass: 'left',
      animated: true,
      data: {
        content: {heading: mode}
      }
    }
    this.mdbModalService.show(ModalComponent, this.modalOptions);
  }

}
