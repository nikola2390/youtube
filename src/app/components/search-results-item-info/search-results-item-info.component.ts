import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { ResultService} from '../../result.service';

@Component({
  selector: 'app-search-results-item-info',
  templateUrl: './search-results-item-info.component.html',
  styleUrls: ['./search-results-item-info.component.scss']
})

export class SearchResultsItemInfoComponent implements OnInit {
  item;
  constructor(
    private route: ActivatedRoute,
    private resultService: ResultService,
  ) { }

  ngOnInit(): void {
    this.getResultItem();
  }

  getResultItem() {
    const id = this.route.snapshot.paramMap.get('id');
    this.item = this.resultService.getResultsItem(id);
  }

}
