import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appEmployee]'
})
export class EmployeeDirective {

  @Input()
  appEmployee;

  constructor(private element: ElementRef) {

    setTimeout(() => {
      const nativeElement: HTMLElement = this.element.nativeElement;
      const salary = parseFloat(this.appEmployee);
      nativeElement.style.color = salary < 10000 ? 'red' : 'green';
    }, 500);
  }


}
