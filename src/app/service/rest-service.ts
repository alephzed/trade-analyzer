import {Resources} from '../constants/ResourceConstants';
import {Observable} from 'rxjs/Observable';
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Headers} from '@angular/http';

@Injectable()
export class RestClient {
    constructor(private httpClient: HttpClient) {
    }

    // deprecated
    getRequest(endpoint: string, params?: {[k: string]: string}, headers?: Headers, app?: string): Observable<any> {
        return this.get(endpoint, params, headers, app);
    }

    /**
     * Get Method
     * @param endpoint
     * @param params
     * @param headers
     * @param app Defines for which application the http communication will be initiated
     * @param responseType Specifies the type of response anticipated from the server,
     * it can have value such as text, blob, json
     * @returns {Observable<R>}
     */
    get(endpoint: string, params?: {[k: string]: string}, headers?: any, app?: string, responseType?: any): Observable<any> {
        // let url = 'https://api.tdameritrade.com/v1/marketdata/quotes';
        const url = 'https://api.tdameritrade.com/v1/marketdata' + endpoint;
        let newParams: HttpParams;
        if (params) {
            newParams = new HttpParams();
            for (let key in params) {
                if (params.hasOwnProperty(key)) {
                    newParams = newParams.set(key, params[key]);
                }
            }
        }

        return this.httpClient.get(url, {
            params: newParams,
            headers: this.makeHeaders(headers),
            responseType: responseType
        });
    }

    post(endpoint: string, body?: any, headers?: any, app?: string, params?: {[k: string]: string}): Observable<any> {
        let httpHeaders = this.makeHeaders(headers) || new HttpHeaders();
        httpHeaders = httpHeaders.set(Resources.REQUEST.headers.CONTENT_TYPE, Resources.REQUEST.contentTypeJSON);

        let url = 'https://api.tdameritrade.com/v1/marketdata/quotes';

        let newParams: HttpParams;
        if (params) {
            newParams = new HttpParams();
            for (let key in params) {
                if (params.hasOwnProperty(key)) {
                    newParams = newParams.set(key, params[key]);
                }
            }
        }

        return this.httpClient.post(url, body, {
            params: newParams,
            headers: httpHeaders
        });
    }

    head(endpoint: string, headers?: HttpHeaders): Observable<any> {
        let httpHeaders = headers || new HttpHeaders();

        let url = 'https://api.tdameritrade.com/v1/marketdata/quotes';

        return this.httpClient.head(url, {headers: httpHeaders, observe: 'response'});
    }

    delete(endpoint: string, headers?: any): Observable<any> {
        let httpHeaders = this.makeHeaders(headers) || new HttpHeaders();
        httpHeaders = httpHeaders.set(Resources.REQUEST.headers.CONTENT_TYPE, Resources.REQUEST.contentTypeJSON);

        let url = 'https://api.tdameritrade.com/v1/marketdata/quotes';

        return this.httpClient.delete(url, {
            headers: httpHeaders
        });
    }

    private makeHeaders(headers?: any) {
        if (headers) {
            let httpHeaders = new HttpHeaders();
            if (headers instanceof Headers) {
                let oldHeaders: Headers = headers as Headers;

                oldHeaders.keys().forEach(key => {
                    httpHeaders = httpHeaders.set(key, oldHeaders.get(key));
                });
                return httpHeaders;
            }

            for (let key in headers) {
                if (headers.hasOwnProperty(key)) {
                    httpHeaders = httpHeaders.set(key, headers[key]);
                }
            }
            return httpHeaders;
        }
    }
}