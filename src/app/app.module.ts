import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputSeachComponent } from './input-seach/input-seach.component';
import { PaginatorComponent } from './paginator/paginator.component';
import { NewsComponent } from './news/news.component';
import {NewsService} from './news/news.service';
import { HttpClientModule } from '@angular/common/http';
import { MaterialAppModule } from './ngmaterials.module';
import {FilterPipe} from './filter.pipe'

@NgModule({
  declarations: [
    AppComponent,
    InputSeachComponent,
    PaginatorComponent,
    NewsComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialAppModule
  ],
  providers: [
    NewsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
