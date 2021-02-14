import { Component } from '@angular/core';
import {MDBModalRef} from "angular-bootstrap-md";
import {Employee} from "../../model/employee";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

  content!: any;
  heading!: string;

  constructor(public modalRef: MDBModalRef) { }

}
