import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import millify from 'millify';
import { DataService } from '../services/data.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  li: any[] = [];
  totalMarketCap:any;
  totalCoins :any;
  total24hVolume: any;
  totalExchanges: any;
  public value: string;
  message: string;
  constructor(private apiService: ApiService , private http: HttpClient , private data:DataService) { 
    this.li = [];
  }

  ngOnInit() {
  this.getTotal();
  this.getData();
}
  getTotal(){
    this.apiService.getData().subscribe((data) => {
      this.totalMarketCap = millify(data.body.data.stats.totalMarketCap, {
        precision: 2,  
        decimalSeparator: "."
      });
      this.totalCoins  = millify(data.body.data.stats.totalCoins, {
        precision: 2,  
        decimalSeparator: "."
      });
      this.total24hVolume = millify(data.body.data.stats.total24hVolume, {
        precision: 2,  
        decimalSeparator: "."
      });
      this.totalExchanges = millify(data.body.data.stats.totalExchanges, {
        precision: 2,  
        decimalSeparator: "."
      });
    });
  }
  getData(){  
    this.apiService.getData().subscribe((data) => {
    this.li = data.body.data.coins;
    console.log(this.li);
    
  });
}
getDetails(value: any) { 
  const name = this.li[value].name; 
  const iconUrl =this.li[value].iconUrl; 
  const rank = this.li[value].rank;
  const btcPrice = this.li[value].btcPrice; ;
  const marketCap = this.li[value].marketCap; ;
  const symbol = this.li[value].symbol; ;
  const price = this.li[value].price; 
  const change = this.li[value].change;
  const uuid = this.li[value].uuid; 
  const obj = {name, iconUrl, rank ,btcPrice , marketCap, symbol , price ,change,uuid};
  this.data.onPushTable(obj);
}
addtoWatchlist(){
  alert( 'Hello ' + '\n Added to Watchlist');    
}
}


