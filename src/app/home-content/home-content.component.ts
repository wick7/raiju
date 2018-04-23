import { Component, OnInit, ElementRef } from '@angular/core';
import { ScrollToAnimationEasing, ScrollToEvent, ScrollToOffsetMap } from '@nicky-lenaers/ngx-scroll-to';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-home-content',
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.scss']
})
export class HomeContentComponent implements OnInit {

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

  ngOnInit() {
  }

}
