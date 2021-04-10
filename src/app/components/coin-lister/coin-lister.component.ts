import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-coin-lister',
  templateUrl: './coin-lister.component.html',
  styleUrls: ['./coin-lister.component.css']
})
export class CoinListerComponent implements OnInit {
  searchterm: string = '';
  allCoins: string[] = [];
  allCoinsData: any[] = [];
  holdAllCoinsData: any[] = [];
  
  constructor(private api: ApiService) {   
  }

  ngOnInit(): void {
    this.getAllCoins()
    this.holdAllCoinsData = this.allCoinsData;
  }

  filterCoin(searchterm: string) {
    let filteredCoins: any[] = [];
    this.allCoinsData.forEach(e => {
      if (e.name.includes(searchterm)) {
        filteredCoins.push(e)
      }
    });
    this.allCoinsData = filteredCoins;
  }

  onEnter(searchterm: string) {
    this.allCoinsData = this.holdAllCoinsData;
    this.searchterm = searchterm;
    this.filterCoin(this.searchterm.toUpperCase())
  }

  getAllCoins() {
    this.api.getAllCoins()
      .subscribe((coinList: any) => {
        console.log('SUCCESS!!!')
        this.allCoins = coinList;
        for (let i = 0; i < 100; i++) {
          //20 possible requests per refresh so we don't run into errors (max req per min for the Api is around 90)
          if (this.allCoins[i].substring(3, 6) == "usd") {
            this.getCoinData(this.allCoins[i])
          }
        }
      }, (error) => {
        console.log('ERROR!!!')
        console.log(error)
      })
  }

  getCoinData(coin: string) {
    this.api.getCoinData(coin)
      .subscribe((coinData) => {
        console.log("SUCCESS 2!!")
        let name = {"name" : coin.toUpperCase()}
        let updatedCoinData = Object.assign(coinData, name)
        this.allCoinsData.push(updatedCoinData)
      }, (error) => {
        console.log("ERROR 2!!!")
        console.log(error)
      })
  }


  

  

  
}
