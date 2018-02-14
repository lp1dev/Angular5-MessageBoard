import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appMessageHide]'
})
export class MessageHideDirective {

  @HostListener('click') onClick () {
    const parent = this.el.nativeElement.parentElement;
    parent.style.display = 'none';
  }

  @HostListener('mouseover') onmouseover () {
    this.el.nativeElement.style.fontWeight = 'bold';
  }

  @HostListener('mouseleave') onmouseleave () {
    this.el.nativeElement.style.fontWeight = '';
  }

  constructor(private el: ElementRef) {
  }
}
