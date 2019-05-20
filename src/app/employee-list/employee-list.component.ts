import { Component, OnInit, ViewChild } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { EmployeeModalComponent } from '../modais/employee-modal/employee-modal.component';
import { Employee } from '../entities/employee';
import Swal from 'sweetalert2';
import { EmployeeEditModalComponent } from '../modais/employee-edit-modal/employee-edit-modal.component';
import { EmployeeDeleteModalComponent } from '../modais/employee-delete-modal/employee-delete-modal.component';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  successMessage = false;
  employee: Employee;

  employeeToEdit: Employee;

  employeeToDelete: Employee;

  @ViewChild(EmployeeModalComponent)
  employeeModal: EmployeeModalComponent;

  @ViewChild(EmployeeEditModalComponent)
  employeeEdit: EmployeeEditModalComponent;

  @ViewChild(EmployeeDeleteModalComponent)
  employeeDelete: EmployeeDeleteModalComponent;


  constructor(public employeeService: EmployeeService) {
  }

  ngOnInit() {
  }


  open() {
    this.employeeModal.showModal();
  }

  openEdit(employee: Employee) {
    this.employeeToEdit = employee;
    this.employeeEdit.showModal();
  }

  openDelete(employee: Employee) {
    this.employeeToDelete = employee;
    this.employeeDelete.showModal();
  }

  onNewEmployee(employee: Employee) {
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

  onEditEmployee(employee: Employee) {
    console.log(this.employee);
  }
}
