import { Directive, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHeader]'
})
export class HeaderDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) { }


  @HostListener('window:click', ['$event'])
    onClick() {
    console.log(event);
    console.log('Other listener', this.el);
    console.log(this.el.nativeElement.classList)

  if (event.srcElement.className == "material-icons header-icon") {
    this.el.nativeElement.classList.add('is-animating');
  
    } 

  }

}
