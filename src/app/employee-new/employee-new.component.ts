import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employee-new',
  templateUrl: './employee-new.component.html',
  styleUrls: ['./employee-new.component.css']
})
export class EmployeeNewComponent implements OnInit {

  constructor(public employeeService: EmployeeService) { }

  name = '';
  salary = 0;
  bonus = 0;

  ngOnInit() {
  }

  addEmployee($event) {
    this.employeeService.employees.push({
      name: this.name,
      salary: this.salary,
      bonus: this.bonus
    });
    console.log(event);
    console.log(this.employeeService.employees);
  }
}
