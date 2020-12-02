import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SearchResultsItemInfoComponent } from './components/search-results-item-info/search-results-item-info.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';

const routes: Routes = [
  { path: 'results', component: SearchResultsComponent },
  { path: 'results/:id', component: SearchResultsItemInfoComponent}
]


@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
