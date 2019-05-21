import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Employee } from 'src/app/entities/employee';

import * as $ from 'jquery';
import { EmployeeService } from 'src/app/services/employee.service';
import { GenericModalComponent } from '../generic-modal/generic-modal.component';

@Component({
  selector: 'app-employee-delete-modal',
  templateUrl: './employee-delete-modal.component.html',
  styleUrls: ['./employee-delete-modal.component.css']
})
export class EmployeeDeleteModalComponent implements OnInit {

  @Input()
  employee: Employee;

  @ViewChild(GenericModalComponent)
  genericModal: GenericModalComponent;

  employeeToDelete: Employee;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
  }

  showModal() {
    this.genericModal.showModal();
  }

  closeModal() {
    this.genericModal.closeModal();
  }

  destroy(employee) {
    this.employeeToDelete = employee;
    this.employeeService.deleteEmployee(this.employeeToDelete);
    this.closeModal();
  }

}
