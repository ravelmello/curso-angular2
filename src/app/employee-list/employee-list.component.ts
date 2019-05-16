import { Component, OnInit, ViewChild } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { EmployeeModalComponent } from '../modais/employee-modal/employee-modal.component';
import { Employee } from '../entities/employee';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  successMessage = false;
  employee: Employee;

  @ViewChild(EmployeeModalComponent)
  employeeModal: EmployeeModalComponent;


  constructor(public employeeService: EmployeeService) {
  }

  ngOnInit() {
  }


  open() {
    this.employeeModal.showModal();
  }

  onNewEmployee(employee) {
    this.employee = employee;
    this.successMessage = true;
    Swal.fire({
      position: 'center',
      type: 'success',
      title: 'Funcionário cadastrado com sucesso',
      showConfirmButton: true,
      timer: 3500
    });
  }
}
