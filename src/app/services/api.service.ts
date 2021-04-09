import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  readonly url = 'https://api.cryptonator.com/api/ticker/btc-usd'; //use bitfinex api and use proxy to get thru cors errors
  constructor(private _http: HttpClient) { }

  getCoinData() {
    return this._http.get(this.url)
  }
}
