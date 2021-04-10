import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  readonly allCoinsUrl = 'https://api.bitfinex.com/v1/symbols';
  constructor(private _http: HttpClient) { }

  getAllCoins() {
    return this._http.get(this.allCoinsUrl)
  }

  getCoinData(coin: string) {
    return this._http.get(`https://api.bitfinex.com/v1/pubticker/${coin}`);
  }
  
}
