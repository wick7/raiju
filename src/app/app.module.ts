import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { HomeContentComponent } from './home-content/home-content.component';
import { AboutComponent } from './about/about.component';

import { AppRoutingModule } from './/app-routing.module';
import { NavComponent } from './nav/nav.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeContentComponent,
    AboutComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    ScrollToModule.forRoot(),
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
