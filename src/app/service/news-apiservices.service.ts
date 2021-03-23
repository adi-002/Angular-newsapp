import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsApiservicesService {

  constructor(private _http: HttpClient) { }

  //news api url
  newsApiUrl = "https://newsapi.org/v2/top-headlines?country=in&apiKey=f24ef4f1fd514f0b9b0a7822afb9b2f9"
  //tech news
  technewsUrl = "https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=f24ef4f1fd514f0b9b0a7822afb9b2f9"
//business news
businessnewsUrl = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=f24ef4f1fd514f0b9b0a7822afb9b2f9"

  //top heading
  topHeading() :Observable<any>
{
  return this._http.get(this.newsApiUrl)
}
techNews() :Observable<any>
{
  return this._http.get(this.technewsUrl)
}
businessNews():Observable<any>
{
  return this._http.get(this.businessnewsUrl)
}
}
