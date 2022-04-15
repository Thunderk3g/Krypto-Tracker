import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { ApiService } from '../services/api.service';
import { TokenStorageService } from '../services/token-storage.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent implements OnInit {
  currentToken: any;
  tokenStorageService: any;
  isEmpty: boolean = false;
  isNeg: boolean = false;
  isPos: boolean = true;
  change: any;
  currentUser: any;
  constructor(
    private apiService: ApiService,
    private token: TokenStorageService
  ) {
    this.currentUser = this.token.getUser();
    this.currentToken = this.token.getToken();
  }

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
    if (this.currentUser != null) {
      this.getPortfolio();
    }
    this.change = '4.37';
    if (this.change <= 0) {
      this.isNeg = true;
    }
  }
  public getPortfolio() {}
}
