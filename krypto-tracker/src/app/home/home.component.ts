import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import {millify} from 'millify';
import { DataService } from '../services/data.service';
import { TokenStorageService } from '../services/token-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  li: any[] = [];
  pageOfItems: Array<any>;
  totalMarketCap:any;
  totalCoins :any;
  p: number;
  total24hVolume: any;
  totalExchanges: any;
  public value: string;
  message: string;
  currentUser:any;
  constructor(private apiService: ApiService , private http: HttpClient , private data:DataService,private token: TokenStorageService) { 
    this.li = [];
  }

  ngOnInit() {
  this.currentUser = this.token.getUser();
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
  });
}
getDetails(value: any) { 
  const uuid = this.li[value].uuid; 
  const obj = {uuid};
  this.data.onPushTable(obj);
}
onChangePage(pageOfItems: Array<any>) {
  this.pageOfItems = pageOfItems;
}
addtoWatchlist(value:any){
    alert( 'Hello ' + '\n Added to Watchlist');    

  this.apiService.addtofav({
    iconUrl: this.li[value].iconUrl,
    name: this.li[value].name,
    change: this.li[value].change,
    price: this.li[value].price,
    marketcap:this.li[value].marketCap,
    userId: this.currentUser.email
  }).subscribe((data) => {
    this.data = data.body;
  });
}
}


