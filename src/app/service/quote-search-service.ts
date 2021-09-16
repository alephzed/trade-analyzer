import { Injectable, Inject } from '@angular/core';
// import {
//   HttpClient,
//   HttpRequest,
//   HttpHeaders
// } from '@angular/common/http';
import { RestClient} from './rest-service';
import { Observable } from 'rxjs/Observable';
import { QuoteResult } from '../model/quote-result';
import { EndpointPaths } from '../constants/EndpointsConstants';

export const QUOTE_API_KEY =
  // 'alefzoo50010%40AMER.OAUTHAP';
  'alefzoo50010@AMER.OAUTHAP';
export const QUOTE_API_URL =
  'https://api.tdameritrade.com/v1/marketdata/quotes';

declare var require: any;

@Injectable()
export class QuoteSearchService {
  mockResponse: any = require('../../mock-data/response.json');
  constructor(
    private restClient: RestClient,
    // @Inject(QUOTE_API_KEY) private apiKey: string,
    // @Inject(QUOTE_API_URL) private apiUrl: string
  ) {}

  getQuotes( symbols: string[]): Observable<any> {
    const headerDict = {
      'Authorization': '',
    };
    const requestOptions = {
      headers: new Headers( headerDict ),
    };
    const params = {
      'apikey': QUOTE_API_KEY,
      'symbol': symbols.join()
    };
    return this.restClient.get( EndpointPaths.MULTIPLE_QUOTES, params);
  }

// getQuotes2( symbols: string[]): Observable<any> {

// }

  // search(query: string): Observable<QuoteResult[]> {
  //   const params: string = [
  //     `apikey=${this.apiKey}`,
  //     `symbol=AAPL,GOOG`
  //   ].join('&');
  //   const queryUrl = `${this.apiUrl}?${params}`;
  //   return this.http.get(queryUrl).map(response => {
  //     return <any>response['items'].map(item => {
  //       console.log('raw item', item); // uncomment if you want to debug
  //       return new QuoteResult({
  //         id: item.id.videoId,
  //         title: item.snippet.title,
  //         description: item.snippet.description,
  //         thumbnailUrl: item.snippet.thumbnails.high.url
  //       });
  //     });
  //   });
  // }
}
