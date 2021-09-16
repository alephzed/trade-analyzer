import { Component, OnInit, Input } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

@Component({
  selector: 'app-stock-quote',
  templateUrl: './stock-quote.component.html',
  styleUrls: ['./stock-quote.component.css']
})
export class StockQuoteComponent implements OnInit {
  data: () => Object;
  @Input() symbol: string;

  headerDict = {
    'Authorization': '',
  };

  requestOptions = {
    headers: new Headers(this.headerDict),
  };

  constructor(private http: Http) {
  }

  ngOnInit() {
  }

  makeRequest(): void {
    this.http.get('https://api.tdameritrade.com/v1/marketdata/GOOG/quotes?apikey=alefzoo50010%40AMER.OAUTHAP', this.requestOptions)
    .subscribe((res: Response) => {
      this.data = res.json();
    });
  }
}
