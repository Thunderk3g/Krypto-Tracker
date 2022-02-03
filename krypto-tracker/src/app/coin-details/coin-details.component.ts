import { Component, OnInit ,Input, AfterViewInit } from '@angular/core';
import { DataService } from '../services/data.service';
import millify from 'millify';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-coin-details',
  templateUrl: './coin-details.component.html',
  styleUrls: ['./coin-details.component.css']
})
export class CoinDetailsComponent implements OnInit,AfterViewInit {
  message: string;
  coinData: any;
  marketCap: string;
  price: string;
  res:any;
  uuid: any;

  constructor(private data: DataService,private apiService: ApiService ) {     

}


  ngOnInit() {
    this.coinData = this.data.getdata();
    this.uuid = this.coinData.uuid;
    this.marketCap = millify(this.coinData.marketCap,{
      precision: 2,  
      decimalSeparator: "."
    });
    this.price = millify(this.coinData.price,{
      precision: 2,  
      decimalSeparator: "."
    });
  }
  ngAfterViewInit(){
    this.getTotal();
  }
  getTotal(){
  this.apiService.getcoinData(this.uuid).subscribe((res) => {
  console.log(res);
    });
  }
}
