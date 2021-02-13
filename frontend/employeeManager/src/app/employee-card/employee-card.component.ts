import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-employee-card',
  templateUrl: './employee-card.component.html',
  styleUrls: ['./employee-card.component.css']
})
export class EmployeeCardComponent implements OnInit {

  @Input()
  employeeName: string = '';
  @Input()
  employeeLastName: string = '';
  @Input()
  employeeTelephone: string = '';
  @Input()
  employeeJobTitle: string = '';
  @Input()
  employeeEmail: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
