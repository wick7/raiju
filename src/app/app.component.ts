import { Component, HostListener, ElementRef } from '@angular/core';
import { ScrollToAnimationEasing, ScrollToEvent, ScrollToOffsetMap } from '@nicky-lenaers/ngx-scroll-to';

import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';






@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('heroState', [
      state('show', style({
        opacity: 1,
        transform: "translateX(0)"
      })),
      state('hide',   style({
        opacity: 0,
        transform: "translateX(-100%)"
      })),
      transition('show => hide', animate('700ms ease-out')),
      transition('hide => show', animate('700ms ease-in'))
    ])
  ]
})
export class AppComponent {

  public ngxScrollToDestination: string;
  public ngxScrollToEvent: ScrollToEvent;
  public ngxScrollToDuration: number;
  public ngxScrollToEasing: ScrollToAnimationEasing;
  public ngxScrollToOffset: number;
  public ngxScrollToOffsetMap: ScrollToOffsetMap;

  title = 'app';
  state = 'hide'

  constructor(public el: ElementRef) {
    this.ngxScrollToDestination = 'merch';
    this.ngxScrollToEvent = 'click';
    this.ngxScrollToDuration = 1600;
    this.ngxScrollToEasing = 'easeInOutCubic';
    
    
  }
  public toggleDestination() {
    this.ngxScrollToDestination = this.ngxScrollToDestination = 'merch';
  }

  
  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const componentPosition = this.el.nativeElement.offsetTop
    const scrollPosition = window.pageYOffset

    if (scrollPosition >= componentPosition) {
      this.state = 'show'
    } else {
      this.state = 'hide'
    }

  }
 

  


}
