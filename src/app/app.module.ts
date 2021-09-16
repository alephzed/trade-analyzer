import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { HttpModule } from '@angular/http';
import { Http, Headers, Response, HttpModule } from '@angular/http';
import {QuoteSearchService} from './service/quote-search-service';
import { RestClient } from './service/rest-service';
import { AppComponent } from './app.component';
import { StockQuoteComponent } from './stock-quote/stock-quote.component';
import { StockQuoteListComponent } from './stock-quote-list/stock-quote-list.component';
import { HttpClient } from '@angular/common/http';
// import {HttpClientModule} from 'ngx-http-client';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    StockQuoteComponent,
    StockQuoteListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [
    QuoteSearchService,
    RestClient,
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
