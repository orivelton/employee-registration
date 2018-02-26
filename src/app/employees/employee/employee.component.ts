import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../shared/employee.service';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { ToastrModule, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  constructor(private employeeService: EmployeeService, private tostr: ToastrService) { }
  ngOnInit() {
    this.resetForm();
  }

  onSubmit(employeeForm: NgForm) {     

    if (employeeForm.value.$key == null) {
      this.employeeService.insertEmployee(employeeForm.value);
      this.resetForm(employeeForm);
      this.tostr.success('Submitted Successfuly', 'Employee Register');
    } else {
      this.employeeService.updateEmployee(employeeForm.value);
      this.resetForm(employeeForm);
      this.tostr.info("Update SuccessFully", "Updated employee")
    }
  }

  resetForm(employeeForm?: NgForm) {
    if (employeeForm != null)
      employeeForm.reset();
    this.employeeService.selectedEmployee = {
      $key: null,
      name: '',
      position: '',
      office: '',
      salary: ''
    }
  }

}
