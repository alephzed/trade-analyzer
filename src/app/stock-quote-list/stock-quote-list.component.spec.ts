import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockQuoteListComponent } from './stock-quote-list.component';

describe('StockQuoteListComponent', () => {
  let component: StockQuoteListComponent;
  let fixture: ComponentFixture<StockQuoteListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockQuoteListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockQuoteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
