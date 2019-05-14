import { Component, OnInit, ElementRef } from '@angular/core';
import { Employee } from 'src/app/entities/employee';

import * as $ from 'jquery';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-modal',
  templateUrl: './employee-modal.component.html',
  styleUrls: ['./employee-modal.component.css']
})
export class EmployeeModalComponent implements OnInit {

  constructor(private element: ElementRef,
    private employeeService: EmployeeService) { }

  employee: Employee = {
    name: '',
    salary: 0,
    bonus: 0
  };

  ngOnInit() {
  }


  showModal() {
    const divModal = this.getDivModal();
    $(divModal).show();
  }

  closeModal() {
    const divModal = this.getDivModal();
    $(divModal).hide();
  }



  private getDivModal(): HTMLElement {
    const nativeElement = this.element.nativeElement;
    return nativeElement.firstChild.firstChild as HTMLElement;
  }


  private addEmployee($event) {
    this.employeeService.employees.push({
      name: this.employee.name,
      salary: this.employee.salary,
      bonus: this.employee.bonus
    });

    this.closeModal();

    console.log(this.employeeService.employees);
  }


}
