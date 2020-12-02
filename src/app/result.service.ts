import { Injectable } from '@angular/core';

import * as data from '../assets/response.json';

@Injectable({
  providedIn: 'root'
})
export class ResultService {

  constructor() { }

  getResults() {
    return data.items;
  }

  getResultsItem(id) {
    return data.items.find(item => item.id === id);
  }
}
