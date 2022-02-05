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
  constructor(private data: DataService, private apiService: ApiService) {
    this.coinData = this.data.getdata();
    this.apiService.getcoinData(this.coinData.uuid).subscribe((res) => {
      this.coin = res.data.coin;
      this.description = this.coin.description.replace(/(<([^>]+)>)/gi, '');
      this.iconUrl = this.coin.iconUrl;
      this.marketCap = this.coin.marketCap;
      this.sparkline = this.coin.sparkline.toString().split(',').map(Number);
      this.chartOptions = {
        series: [
          {
            type: 'line',
            data: this.sparkline
          },
        ],
      };
      console.log(this.coin.sparkline);
    });
 
  }
}
