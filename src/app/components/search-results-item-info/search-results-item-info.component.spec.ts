import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchResultsItemInfoComponent } from './search-results-item-info.component';

describe('SearchResultsItemInfoComponent', () => {
  let component: SearchResultsItemInfoComponent;
  let fixture: ComponentFixture<SearchResultsItemInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchResultsItemInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchResultsItemInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
