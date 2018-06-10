import { Directive, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appNav]'
})


export class NavDirective {
  private scrollTop: number;
  private initialClass: string;

  constructor(private el: ElementRef, private renderer: Renderer2) {
    // this.initialClass = 'mdl-layout__drawer.is-visible';
   
   }

//    @HostListener('window:scroll', ['$event']) 
//    onWindowScroll(event) {
//      console.log(window.pageYOffset);
//      if el.nativeElement.pageYOffset === window.pageYOffset {

//      }
//  }



@HostListener('window:click', ['$event'])
onClick() {
// console.log(event.srcElement.className);
// console.log('class list', this.el);
console.log('fire nav directive');

if (this.el.nativeElement.classList.length == 1 && event.srcElement.className == "material-icons nav-icon" ) {
  this.el.nativeElement.classList.add('is-visible');
  
}else if(this.el.nativeElement.classList.length == 2) {
  this.el.nativeElement.classList.remove('is-visible');
}

}

}

// clientX: 27, clientY: 23
