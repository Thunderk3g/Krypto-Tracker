import { Component, OnInit ,Input } from '@angular/core';
import { DataService } from '../services/data.service';
import millify from 'millify';

@Component({
  selector: 'app-coin-details',
  templateUrl: './coin-details.component.html',
  styleUrls: ['./coin-details.component.css']
})
export class CoinDetailsComponent implements OnInit {
  message: string;
  coinData: any;
  marketCap: string;
  price: string;
  

  constructor(private data: DataService) {     

}


  ngOnInit() {
    this.coinData = this.data.getdata();
    this.marketCap = millify(this.coinData.marketCap,{
      precision: 2,  
      decimalSeparator: "."
    });
    this.price = millify(this.coinData.price,{
      precision: 2,  
      decimalSeparator: "."
    });
    console.log(this.data);
  }
}
