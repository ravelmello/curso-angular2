import { Component, OnInit, ElementRef } from '@angular/core';
import { Employee } from 'src/app/entities/employee';

import * as $ from 'jquery';

@Component({
  selector: 'app-employee-modal',
  templateUrl: './employee-modal.component.html',
  styleUrls: ['./employee-modal.component.css']
})
export class EmployeeModalComponent implements OnInit {

  constructor(private element: ElementRef) { }

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



  private getDivModal(): HTMLElement {
    const nativeElement = this.element.nativeElement;
    return nativeElement.firstChild as HTMLElement;
  }


}
