import { Component, OnInit } from '@angular/core';
import {NewsApiservicesService} from '../service/news-apiservices.service';
@Component({
  selector: 'app-technews',
  templateUrl: './technews.component.html',
  styleUrls: ['./technews.component.css']
})
export class TechnewsComponent implements OnInit {

  constructor(private _services:NewsApiservicesService) { }
technewsDisplay: any = [];
  ngOnInit(): void {
    this._services.techNews().subscribe((result)=> {
      this.technewsDisplay = result.articles;
    })
  }

}
