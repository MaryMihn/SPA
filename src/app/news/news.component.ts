import { Component, OnInit } from '@angular/core';
import {NewsService} from './news.service'

// import {INewsServerResponse} from './news-server-response.interface'
// import { first } from 'rxjs/operators';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  newsCards:any;
  //  newsArray = this.newsService.getNews().subscribe();
  constructor(private newsService: NewsService){
   this.newsService.getNews().subscribe(news=>{this.newsCards=news});
  }
  ngOnInit(): void {
  }


}


