import { Component, OnInit, ElementRef } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-generic-modal',
  templateUrl: './generic-modal.component.html',
  styleUrls: ['./generic-modal.component.css']
})
export class GenericModalComponent implements OnInit {

  constructor(private element: ElementRef) { }

  ngOnInit() {
  }


  showModal() {
    $(this.divModal).show(); //utilizar esse trecho de código
  }

  closeModal() {
    $(this.divModal).hide();
  }

  private get divModal(): HTMLElement {
    const nativeElement = this.element.nativeElement;
    return nativeElement.firstChild as HTMLElement;
  }

}
