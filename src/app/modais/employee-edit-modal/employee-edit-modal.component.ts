import { Component, OnInit, ViewChild, EventEmitter, Output, ElementRef, Input } from '@angular/core';
import { EmployeeModalComponent } from '../employee-modal/employee-modal.component';
import { Employee } from 'src/app/entities/employee';
import * as $ from 'jquery';
import Swal from 'sweetalert2';

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

  constructor(private element: ElementRef) { }

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
    return nativeElement.firstChild.firstChild as HTMLElement;
  }

  private editEmployee(event) {
    const copy = Object.assign({}, this.employee);
    this.onSubmit.emit(copy);
    this.closeModal();
  }


}
