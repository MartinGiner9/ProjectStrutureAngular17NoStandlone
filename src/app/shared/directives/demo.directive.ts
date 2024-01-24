import { Directive } from '@angular/core';

@Directive({
  selector: '[appDemo]'
})
export class DemoDirective {
  @Input('appMinLength') minLength: number;
  constructor(private el: ElementRef) {}
  @HostListener('input') onInput() {
    const inputValue: string = this.el.nativeElement.value;
    if (inputValue.length < this.minLength) {
      this.el.nativeElement.setCustomValidity(`Minimum length is ${this.minLength} characters.`);
    } else {
      this.el.nativeElement.setCustomValidity('');
    }
  }

}
