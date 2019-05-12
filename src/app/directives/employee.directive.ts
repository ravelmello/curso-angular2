import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appEmployee]'
})
export class EmployeeDirective {

  @Input()
  appEmployee;

  constructor(private element: ElementRef) {
    //this.element.nativeElement.innerHTML = this.appEmployee;
    const nativeElement: HTMLElement = this.element.nativeElement;
    const salary = parseFloat(this.appEmployee);
   }


}
