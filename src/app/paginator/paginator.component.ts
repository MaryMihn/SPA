import { Component, OnInit } from '@angular/core';
import {MatPaginatorModule} from '@angular/material/paginator'

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  nextPage() {
    console.log('zzzzzzzzzzzzz')
  }

}
