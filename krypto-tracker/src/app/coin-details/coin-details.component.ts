import { Component, OnInit ,Input } from '@angular/core';
import { DataService } from '../services/data.service';
@Component({
  selector: 'app-coin-details',
  templateUrl: './coin-details.component.html',
  styleUrls: ['./coin-details.component.css']
})
export class CoinDetailsComponent implements OnInit {
  message: string;
  coinData: any;
  

  constructor(private data: DataService) {     

}


  ngOnInit() {
    this.coinData = this.data.getdata();
    console.log(this.data);
  }
}
