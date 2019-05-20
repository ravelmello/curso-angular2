import { Component, OnInit, ElementRef, Input } from '@angular/core';
import { Employee } from 'src/app/entities/employee';

import * as $ from 'jquery';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-delete-modal',
  templateUrl: './employee-delete-modal.component.html',
  styleUrls: ['./employee-delete-modal.component.css']
})
export class EmployeeDeleteModalComponent implements OnInit {

  @Input()
  employee: Employee;

  employeeToDelete: Employee;

  constructor(private element: ElementRef, private employeeService: EmployeeService) { }

  ngOnInit() {
  }

  showModal() {
    const divModal = this.getDivModal();
    $(divModal).show(); //utilizar esse trecho de código
  }

  closeModal() {
    const divModal = this.getDivModal();
    $(divModal).hide();
  }

  private getDivModal(): HTMLElement {
    const nativeElement = this.element.nativeElement;
    return nativeElement.firstChild as HTMLElement;
  }

  destroy(employee) {
    this.employeeToDelete = employee;
    this.employeeService.deleteEmployee(this.employeeToDelete);
    this.closeModal();
  }

}
