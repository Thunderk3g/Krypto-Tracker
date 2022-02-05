import { Component, OnInit, SimpleChanges } from '@angular/core';
import { DataService } from '../services/data.service';
import millify from 'millify';
import { ApiService } from '../services/api.service';
import * as Highcharts from 'highcharts';
import { Options } from 'highcharts';

@Component({
  selector: 'app-coin-details',
  templateUrl: './coin-details.component.html',
  styleUrls: ['./coin-details.component.css'],
})
export class CoinDetailsComponent {
  Highcharts: typeof Highcharts = Highcharts;
  sparkline : any;
  chartOptions: Highcharts.Options;
  coinData: any;
  uuid: any;
  coin: any;
  marketCap: any;
  description: string;
  iconUrl: any;
  name: any;
  price: string;
  alltime: string;
  totalsupply: string;
  symbol: any;
  change: any;
  numberofExchanges: any;
  rank: any;
  websiteurl: any;
  coinrankurl: any;
  constructor(private data: DataService, private apiService: ApiService) {
    
    this.coinData = this.data.getdata();
    this.apiService.getcoinData(this.coinData.uuid).subscribe((res) => {
      this.coin = res.data.coin;
      this.name = this.coin.name;
      this.price =this.coin.price;
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
      this.rank = this.coin.rank;
      this.websiteurl = this.coin.websiteUrl;
      this.coinrankurl = this.coin.coinrankingUrl;
      this.numberofExchanges = this.coin.numberOfExchanges
      this.marketCap = millify(this.coin.marketCap, {
        precision: 2,  
        decimalSeparator: "."
      });
      this.sparkline = this.coin.sparkline.toString().split(',').map(Number);
      this.chartOptions = {
        title: {
          text: ''
        },
        subtitle: {
          text: ''
      },
        yAxis: {
          title: {
              text: 'Price'
          },
      },
      xAxis: {
        labels: {
          enabled:false,
        },
        accessibility: {
            rangeDescription: 'Range: 0 to 20'
        }
    },
        series: [
          {
            name:this.coin.name+'Price',
            type: 'line',
            data: this.sparkline
          },
        ],
        plotOptions: {
          series: {
              color: '#16C784',
              marker: {
                  enabled: false
              }
          }
      },
        legend: {
          layout: 'horizontal',
          align: 'center',
          verticalAlign: 'bottom'
      }
      };
      console.log(this.coin.sparkline);
    });
 
  }
  
}
