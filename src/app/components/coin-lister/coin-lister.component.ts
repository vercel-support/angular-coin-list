import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-coin-lister',
  templateUrl: './coin-lister.component.html',
  styleUrls: ['./coin-lister.component.css']
})
export class CoinListerComponent implements OnInit {
  btcCoin: any; //make an interface to use specifically 
  constructor(private api: ApiService) { 
    
  }
  ngOnInit(): void {
    this.getCoinData()
  }

  getCoinData() {
    this.api.getCoinData()
      .subscribe((data: any) => {
        console.log("DATA ACCESSED!")
        console.log(data)
        this.btcCoin = data;
        console.log(this.btcCoin)
      },
      (error) => {
        console.log("ERROR!")
        console.log(error)
      })
  }

  

  

  
}
