import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TechnewsComponent } from './technews/technews.component';
import { TopHeadingComponent } from './top-heading/top-heading.component';
import {BusinessnewsComponent} from './businessnews/businessnews.component'
const routes: Routes = [
  {
    path: '',component: TopHeadingComponent},//Home
   { path: 'tech',component: TechnewsComponent}, //tech news
{path:'business', component:BusinessnewsComponent } //business news
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
