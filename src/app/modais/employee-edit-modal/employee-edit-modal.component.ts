import { Component, OnInit, ViewChild, EventEmitter, Output, ElementRef, Input } from '@angular/core';
import { EmployeeModalComponent } from '../employee-modal/employee-modal.component';
import { Employee } from 'src/app/entities/employee';
import * as $ from 'jquery';
import Swal from 'sweetalert2';
import { GenericModalComponent } from '../generic-modal/generic-modal.component';

@Component({
  selector: 'app-employee-edit-modal',
  templateUrl: './employee-edit-modal.component.html',
  styleUrls: ['./employee-edit-modal.component.css']
})
export class EmployeeEditModalComponent implements OnInit {

  @Output()
  onSubmit: EventEmitter<Employee> = new EventEmitter<Employee>();

  @Input()
  employee: Employee;

  @ViewChild(GenericModalComponent)
  genericModal: GenericModalComponent;

  constructor() { }

  ngOnInit() {
  }

  showModal() {
    this.genericModal.showModal();
  }

  closeModal() {
    this.genericModal.closeModal();
  }


  private editEmployee(event) {
    const copy = Object.assign({}, this.employee);
    this.onSubmit.emit(copy);
    this.closeModal();
  }


}
