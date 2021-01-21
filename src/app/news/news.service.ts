import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {INewsServerResponse} from './news-server-response.interface';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class NewsService {

  constructor(private http: HttpClient) { }

  getNews(): Observable<INewsServerResponse> {
    return this.http.get<INewsServerResponse>('http://newsapi.org/v2/everything?domains=wsj.com&apiKey=58c134fe78964feab6df1258b4430e93')
    .pipe(map((response:any)=>{
      const newsArray = response.articles.map(el=>{
        return {
          title: el.title,
          author: el.author,
          url: el.url,
          urlToImage: el.urlToImage,
          description: el.description
        }
      })
    return newsArray}))
  }
}
