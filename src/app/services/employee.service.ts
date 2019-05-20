import { Injectable } from '@angular/core';
import { Employee } from '../entities/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employees: Employee[] = [];

  constructor() { }

  addEmployee(employee: Employee) {
    this.employees.push(employee);
  }

  deleteEmployee(employee: Employee) {
    const index = this.employees.indexOf(employee);
    this.employees.splice(index, 1);
  }

}
