import {Component, Input, OnInit} from '@angular/core';
import {MDBModalRef, MDBModalService} from "angular-bootstrap-md";
import {ModalComponent} from "../utilities/modal/modal.component";
import {Employee} from "../model/employee";

@Component({
  selector: 'app-employee-card',
  templateUrl: './employee-card.component.html',
  styleUrls: ['./employee-card.component.scss']
})
export class EmployeeCardComponent implements OnInit {

  modalOptions: any;

  @Input() employee!: Employee;
  // modalOptions = {
  //   data: {
  //     content: this.employee,
  //     heading: "Edit"
  //   }
  // };

  constructor(private mdbModalService: MDBModalService) {
  }

  ngOnInit(): void {
  }

  openModal(employee: Employee, mode: string): void {
    this.modalOptions = {
      backdrop: true,
      keyboard: true,
      focus: true,
      show: false,
      ignoreBackdropClick: false,
      class: '',
      containerClass: '',
      animated: true,
      data: {
        content: { heading: mode, employee: employee}
      }
    }
    this.mdbModalService.show(ModalComponent, this.modalOptions);
  }

}
