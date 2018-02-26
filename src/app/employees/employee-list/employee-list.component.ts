import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../shared/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  constructor( private employeeService: EmployeeService ) { }

  ngOnInit() {
  }

}
