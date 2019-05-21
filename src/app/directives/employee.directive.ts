import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appEmployee]'
})
export class EmployeeDirective {

  constructor(private element: ElementRef) {
  }


  @Input()
  set appEmployee(value) {
    const nativeElement: HTMLElement = this.element.nativeElement;
      const salary = parseFloat(value);
      nativeElement.style.color = salary < 10000 ? 'red' : 'green';
  }


}
