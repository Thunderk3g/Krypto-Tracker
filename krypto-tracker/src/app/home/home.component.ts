import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import millify from 'millify';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  dropDownList: any;
  data: any;
  li: any[] = [];
  item: any;
  totalMarketCap:any;
  totalMarkets:any;
  totalCoins: any;
  totalExchanges: any;
  constructor(private apiService: ApiService , private http: HttpClient ) { 
    this.li = [];
  }

  ngOnInit() {
    this.apiService.getData().subscribe((data) => {
      this.li = data.body.data.coins;
      this.totalMarketCap = millify(data.body.data.stats.totalMarketCap, {
        precision: 5,  
        decimalSeparator: "."
      });
      this.totalMarkets = millify(data.body.data.stats.totalMarkets, {
        precision: 2,  
        decimalSeparator: "."
      });
      this.totalCoins = millify(data.body.data.stats.totalCoins, {
        precision: 2,  
        decimalSeparator: "."
      });
      this.totalExchanges = millify(data.body.data.stats.totalExchanges, {
        precision: 2,  
        decimalSeparator: "."
      });
      console.log(this.li);
    });
  
}
}

