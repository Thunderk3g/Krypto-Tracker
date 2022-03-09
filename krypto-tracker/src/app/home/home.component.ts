import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { millify } from 'millify';
import { DataService } from '../services/data.service';
import { TokenStorageService } from '../services/token-storage.service';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options;
  li: any[] = [];
  spark:any[] =[];
  pageOfItems: Array<any>;
  totalMarketCap: any;
  totalCoins: any;
  p: number;
  total24hVolume: any;
  totalExchanges: any;
  public value: string;
  message: string;
  showModal = false;
  currentUser: any;
  i:any;
  constructor(
    private apiService: ApiService,
    private http: HttpClient,
    private data: DataService,
    private token: TokenStorageService
  ) {
    
    this.li = [];
    this.getData();

  }

  ngOnInit() {
    this.currentUser = this.token.getUser();
    this.getTotal();
   
  }
  getTotal() {
    this.apiService.getData().subscribe((data) => {
      this.totalMarketCap = millify(data.body.data.stats.totalMarketCap, {
        precision: 2,
        decimalSeparator: '.',
      });
      this.totalCoins = millify(data.body.data.stats.totalCoins, {
        precision: 2,
        decimalSeparator: '.',
      });
      this.total24hVolume = millify(data.body.data.stats.total24hVolume, {
        precision: 2,
        decimalSeparator: '.',
      });
      this.totalExchanges = millify(data.body.data.stats.totalExchanges, {
        precision: 2,
        decimalSeparator: '.',
      });
    });
  }
  getData() {
    this.apiService.getData().subscribe((data) => {
      this.li = data.body.data.coins;
      console.log(this.li); 
      for (let i = 0; i < this.li.length; i++) {
        this.chartOptions = {chart: {
          borderWidth: 0,
          type: 'area',
          margin: [2, 0, 2, 0],
          width: 120,
          backgroundColor: 'rgba(0,0,0,0)',
          height: 20,
          style: {
            overflow: 'visible'
          },
          // small optimalization, saves 1-2 ms each sparkline
        },
        title: {
          text: ''
        },
        credits: {
          enabled: false
        },
        series: [
          {
            name:'Price',
            type: 'line',
            data: this.li[i].sparkline.toString().split(',').map(Number),
          },
        ],
        xAxis: {
          labels: {
            enabled: false
          },
          title: {
            text: null
          },
          startOnTick: false,
          endOnTick: false,
          tickPositions: []
        },
        yAxis: {
          endOnTick: false,
          startOnTick: false,
          labels: {
            enabled: false
          },
          title: {
            text: null
          },
          tickPositions: [0]
        },
        legend: {
          enabled: false
        },
        tooltip: {
          hideDelay: 0,
          outside: true,
          shared: true
        },
        plotOptions: {
          series: {
            animation: false,
            lineWidth: 1,
            shadow: false,
            states: {
              hover: {
                lineWidth: 1
              }
            },
            marker: {
              radius: 1,
              states: {
                hover: {
                  radius: 2
                }
              }
            },
          },
          column: {
            negativeColor: '#910000',
            borderColor: 'silver'
          }
        }
      }
      }
    });
  }
  getDetails(value: any) {
    const uuid = this.li[value].uuid;
    const obj = { uuid };
    this.data.onPushTable(obj);
  }
  onChangePage(pageOfItems: Array<any>) {
    this.pageOfItems = pageOfItems;
  }
  addtoWatchlist(value: any) {

    this.apiService
      .addtofav({
        iconUrl: this.li[value].iconUrl,
        name: this.li[value].name,
        change: this.li[value].change,
        price: this.li[value].price,
        marketcap: this.li[value].marketCap,
        userId: this.currentUser.email,
      })
      .subscribe((data) => {
        this.data = data.body;
      });
      this.showModal = false;
  }

  toggleModal() {
    this.showModal = !this.showModal;
  }
  
}
