import { Component, OnInit } from '@angular/core';
// import { Http, Headers, Response } from '@angular/http';
import { QuoteResult} from '../model/quote-result';
import { QuoteSearchService } from '../service/quote-search-service';

@Component({
  selector: 'app-stock-quote-list',
  templateUrl: './stock-quote-list.component.html',
  styleUrls: ['./stock-quote-list.component.css']
})
export class StockQuoteListComponent implements OnInit {
  data: any= {};
  symbols: string[];
  apiKey = 'alefzoo50010';
  headerDict = {
    'Authorization': '',
  };
  quotes: Map<string, QuoteResult>;

  requestOptions = {
    headers: new Headers(this.headerDict),
  };

  constructor( private quoteSearch: QuoteSearchService) {
    this.symbols = ['MSFT', 'AAPL', 'AMZN', 'NFLX', 'FB', 'GOOG', 'HMNY'];
  }

  ngOnInit() {
    this.makeRequest();
  }

  getData() {
    const m = new Map();
    m.set('a', 1);
    m.set('b', 2);
    console.log(m.size);
    console.log(this.data.size);
    // for([key,value] of m) {
    //   console.log(key + '=' + value)
    // }
    // console.log(this.data.values);
    return this.data;
  }

  makeRequest(): void {
    this.quotes = new Map<string, QuoteResult>();
    this.quoteSearch.getQuotes( this.symbols).subscribe( (response) => {
      JSON.parse(JSON.stringify(response), (key, value) => {
        if (this.symbols.indexOf(key) > 0) {
          console.log(value);
          this.quotes.set(key, value);
        } // log the current property name, the last is "".
        return value;     // return the unchanged property value.
      });
      // console.log('json ' + jsonString);
      this.data = response;
      console.log('size: ' + this.quotes.size);
      console.log(this.quotes.get('AAPL').lastPrice);
    }
      );
    }
    // this.http.get('https://api.tdameritrade.com/v1/marketdata/quotes?apikey=' + this.apiKey +
    // '%40AMER.OAUTHAP&symbol=' + this.symbols.join(),
    //  this.requestOptions)
    // .subscribe((res: Response) => {
    //   console.log('json ' + res.json());
    //   // this.data = Array.of(res.json())[0];
    //   this.data = JSON.parse(res.text());
    //   console.log(this.data.size);
    // });
    getKeys(quotes) {
      return Array.from(quotes.keys());
    }
}
