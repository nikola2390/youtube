import { Component, OnInit } from '@angular/core';
import * as data from '../../../assets/response.json';

@Component({
  selector: 'app-search-results-item-info',
  templateUrl: './search-results-item-info.component.html',
  styleUrls: ['./search-results-item-info.component.scss']
})
export class SearchResultsItemInfoComponent implements OnInit {
  item = data.items[4];
  constructor() { }

  ngOnInit(): void {
  }

}
