import { Component, OnInit, SimpleChanges } from '@angular/core';
import { DataService } from '../services/data.service';
import millify from 'millify';
import { ApiService } from '../services/api.service';
import * as Highcharts from 'highcharts';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-coin-details',
  templateUrl: './coin-details.component.html',
  styleUrls: ['./coin-details.component.css'],
})
export class CoinDetailsComponent {
  Highcharts: typeof Highcharts = Highcharts;
  sparkline : any;
  coinData: any;
  uuid: any;
  coin: any;
  marketCap: any;
  description: string;
  iconUrl: any;
  name: any;
  price: string;
  alltime: any;
  totalsupply: string;
  symbol: any;
  change: any;
  numberofExchanges: any;
  rank: any;
  websiteurl: any;
  isNeg:boolean=false;
  coinrankurl: any;
  errors: any;
  percentage: any;
  low: any;
  high: number;
  isReadMore:boolean=true;
  constructor(private router:Router,private data: DataService, private apiService: ApiService, private route: ActivatedRoute,) {
  
 
  }
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if(id !=  null || id != 0){
    this.getcoinDetails(id);
    }
  }
  
  getcoinDetails(id:any): void {
    
    this.apiService.getcoinData(id)
    .subscribe(
      res => {
      this.coin = res.data.coin;
      console.log(this.coin);
      this.name = this.coin.name;
      this.price =this.coin.price;
      this.rank =this.coin.rank;
      this.alltime = millify(this.coin.allTimeHigh.price, {
        precision: 2,  
        decimalSeparator: "."
      });
     
      this.totalsupply = millify(this.coin.supply.total , {
        precision: 2,  
        decimalSeparator: "."
      });
      this.description = this.coin.description.replace(/<.*?>/g, '').replace(/&lsquo;/g,"'").replace(/&rsquo;/g,"'");
      this.iconUrl = this.coin.iconUrl;
      this.symbol = this.coin.symbol;
      this.change = this.coin.change;
      if(this.change<= 0){
        this.isNeg = true;
      }
      this.rank = this.coin.rank;
      this.websiteurl = this.coin.websiteUrl;
      this.coinrankurl = this.coin.coinrankingUrl;
      this.numberofExchanges = this.coin.numberOfExchanges
      this.marketCap = millify(this.coin.marketCap, {
        precision: 2,  
        decimalSeparator: "."
      });
      this.sparkline = this.coin.sparkline.toString().split(',').map(Number);
      this.low = Number(this.sparkline[0])
      this.high = Number(this.coin.allTimeHigh.price)
      this.percentage = (this.low/this.high)*100;

     var chart = new Highcharts.Chart({
      chart: {
        renderTo: 'chart',
        margin: 0,       
        backgroundColor: 'rgba(0,0,0,0)'
       },
  
      title: {
        text: ''
      },
  
      subtitle: {
        text: ''
      },
  
      rangeSelector: {
        selected: 1
      },

      series: [{
        name: this.name+"'s price",
        data: this.sparkline,
        type: 'area',
        threshold: null,
        marker: {
          enabled: false
      },
        tooltip: {
          valueDecimals: 2
        },
        color: {
          linearGradient: {
              x1: 0,
              x2: 0,
              y1: 0,
              y2: 1
          },
          stops: [
              [0, '#02a388'],
              [1, '#f9f9f9']
          ]
      }
      }],
     })
    },
    err => {
      this.router.navigate(['/404']);
    },  
    );
  }
  showText() {
    this.isReadMore = !this.isReadMore
 }
}
