import { Directive, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appNav]'
})


export class NavDirective {
  private scrollTop: number;
  private initialClass: string;

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.initialClass = 'mdl-layout__drawer.is-visible';
   
   }

//    @HostListener('window:scroll', ['$event']) 
//    onWindowScroll(event) {
//      console.log(window.pageYOffset);
//      if el.nativeElement.pageYOffset === window.pageYOffset {

//      }
//  }



@HostListener('window:click', ['$event'])
onClick($event) {
console.log("scrolling...");
console.log('class list', this.el.nativeElement.classList);

if (this.el.nativeElement.classList[0] === 'mdl-layout__drawer') {
  this.el.nativeElement.classList.add(this.initialClass);
  this.el.nativeElement.classList.remove('mdl-layout__drawer');
}else if(this.el.nativeElement.classList[0] === 'mdl-layout__drawer.is-visible') {
  this.el.nativeElement.classList.add('mdl-layout__drawer');
  this.el.nativeElement.classList.remove('mdl-layout__drawer.is-visible');
}

}


}

