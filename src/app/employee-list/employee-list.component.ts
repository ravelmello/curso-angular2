import { Component, OnInit, ViewChild } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { EmployeeModalComponent } from '../modais/employee-modal/employee-modal.component';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  @ViewChild(EmployeeModalComponent)
  employeeModal: EmployeeModalComponent;


  constructor(public employeeService: EmployeeService) {
  }

  ngOnInit() {
  }


  open() {
    this.employeeModal.showModal();
  }

}
