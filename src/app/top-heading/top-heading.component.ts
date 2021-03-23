import { Component, OnInit } from '@angular/core';
import {NewsApiservicesService} from '../service/news-apiservices.service';
@Component({
  selector: 'app-top-heading',
  templateUrl: './top-heading.component.html',
  styleUrls: ['./top-heading.component.css']
})
export class TopHeadingComponent implements OnInit {

  constructor(private _services:NewsApiservicesService) { }

  //display data 
  topHeadingDisplay:any =[];

  ngOnInit(): void {
    this._services.topHeading().subscribe((result)=>{
      console.log(result)
      this.topHeadingDisplay = result.articles;
    })
  }

}
