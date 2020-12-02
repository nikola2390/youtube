import { Component, OnInit } from '@angular/core';
import { ResultService } from '../../result.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})

export class SearchResultsComponent implements OnInit {
  itemsData;
  constructor(private resultService: ResultService) { }

  ngOnInit(): void {
    this.getResults();
  }

  getResults() {
    this.itemsData = this.resultService.getResults();
  }

}
