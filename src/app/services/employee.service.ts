import { Injectable } from '@angular/core';
import { Employee } from '../entities/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employees: Employee[] = [];

  constructor() { }

  public addEmployee(employee: Employee) {
    this.employees.push(employee);
  }
}
