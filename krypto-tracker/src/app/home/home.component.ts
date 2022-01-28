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
  li: any;
  totalMarketCap:any;
  
  constructor(private apiService: ApiService , private http: HttpClient ) { 
    this.li = {};
  }

  ngOnInit() {
    this.apiService.getData().subscribe((data) => {
      this.li = data.body.data.stats;
      this.totalMarketCap = millify(data.body.data.stats.totalMarketCap, {
        precision: 5,  
        decimalSeparator: "."
      });
      console.log(this.totalMarketCap);
    });
  
}
}

