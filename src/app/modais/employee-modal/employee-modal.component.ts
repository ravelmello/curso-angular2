import { Component, OnInit, ElementRef, Output, EventEmitter, ViewChild } from '@angular/core';
import { Employee } from 'src/app/entities/employee';

import * as $ from 'jquery';

import { EmployeeService } from 'src/app/services/employee.service';
import { GenericModalComponent } from '../generic-modal/generic-modal.component';


@Component({
  selector: 'app-employee-modal',
  templateUrl: './employee-modal.component.html',
  styleUrls: ['./employee-modal.component.css']
})
export class EmployeeModalComponent implements OnInit {

  @ViewChild(GenericModalComponent)
  genericModal: GenericModalComponent;

  constructor(private employeeService: EmployeeService) { }

  employee: Employee = {
    name: '',
    salary: 0,
    bonus: 0
  };

  @Output()
  onSubmit: EventEmitter<Employee> = new EventEmitter<Employee>();

  ngOnInit() {
  }


  showModal() {
    this.genericModal.showModal();
  }

  closeModal() {
    this.genericModal.closeModal();
  }


  private addEmployee($event) {
    const copy = Object.assign({}, this.employee);
    this.employeeService.addEmployee(copy);
    this.onSubmit.emit(copy);
    this.closeModal();
  }


}
