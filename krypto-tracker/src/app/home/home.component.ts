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
  data: any;
  term: any;
  p:any;
  currentPage:any;
  itemsPerPage:any;
  li: any[] = [];
  item: any;
  totalMarketCap:any;
  totalCoins :any;
  total24hVolume: any;
  totalExchanges: any;
  value: any;
  constructor(private apiService: ApiService , private http: HttpClient ) { 
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
  console.log(value);
}
}

