import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
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

  constructor(private mdbModalService: MDBModalService) {
  }

  ngOnInit(): void {
  }


  openModal(mode: string): void {
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
        content: { heading: mode, employee: this.employee}
      }
    }
    this.mdbModalService.show(ModalComponent, this.modalOptions);
  }

}
