import { Component, OnInit } from '@angular/core';
import * as data from '../../../assets/response.json';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {
  itemsData = data.items
  constructor() { }

  ngOnInit(): void {
  }

}
