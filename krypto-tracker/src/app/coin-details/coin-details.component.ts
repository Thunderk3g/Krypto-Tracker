import { Component, OnInit ,Input, AfterViewInit } from '@angular/core';
import { DataService } from '../services/data.service';
import millify from 'millify';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-coin-details',
  templateUrl: './coin-details.component.html',
  styleUrls: ['./coin-details.component.css']
})
export class CoinDetailsComponent implements OnInit {
  coinData: any;
  uuid: any;
  coin:any;
  constructor(private data: DataService,private apiService: ApiService ) {     
    this.coinData =  this.data.getdata();
    this.apiService.getcoinData(this.coinData.uuid).subscribe((res) => {
      this.coin = res.data.coin;
      console.log(this.coin);
    }); 
}
  ngOnInit() {
  
}
}
