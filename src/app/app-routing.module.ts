import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeContentComponent } from './home-content/home-content.component';

import { AboutComponent } from './about/about.component';



const routes: Routes = [
  {path: '', component: HomeContentComponent},
  {path: 'about', component: AboutComponent}
];

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }