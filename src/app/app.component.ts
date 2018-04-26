import { Component, HostListener, ElementRef, OnInit } from '@angular/core';
import { ScrollToAnimationEasing, ScrollToEvent, ScrollToOffsetMap } from '@nicky-lenaers/ngx-scroll-to';

import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { Router, NavigationEnd } from '@angular/router';





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
export class AppComponent implements OnInit {

  public ngxScrollToDestination: string;
  public ngxScrollToEvent: ScrollToEvent;
  public ngxScrollToDuration: number;
  public ngxScrollToEasing: ScrollToAnimationEasing;
  public ngxScrollToOffset: number;
  public ngxScrollToOffsetMap: ScrollToOffsetMap;

  title = 'app';
  state = 'hide'

  constructor(public el: ElementRef, private router: Router) {
    this.ngxScrollToDestination = 'merch';
    this.ngxScrollToEvent = 'click';
    this.ngxScrollToDuration = 1600;
    this.ngxScrollToEasing = 'easeInOutCubic';
    
    
  }
  public toggleDestination() {
    this.ngxScrollToDestination = this.ngxScrollToDestination = 'merch';
  }

  


  @HostListener('window:click', ['$event'])
    onWindowScroll($event) {
    console.log("scrolling...");
}

ngOnInit() {
  this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      window.scrollTo(0, 0) // for example
  });
}
 
onActivate() {
  window.scrollTo(0, 0);
}
  


}
