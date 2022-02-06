import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { TokenStorageService } from '../services/token-storage.service';
import {millify} from 'millify';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.css']
})
export class WatchlistComponent  { 
  currentToken: any;
  tokenStorageService: any;
  data: any;
  li:any[] =[];
  currentUser: any;
  constructor(
    private apiService: ApiService,
    private token: TokenStorageService

  ) {
  }  
  
  ngOnInit(): void {  
    this.currentUser = this.token.getUser();
    this.currentToken = this.token.getToken();
    this.getFav();
  }  
getFav(){
  this.apiService.getfav({
    userId: this.currentToken
  }).subscribe((data) => {
    this.li = data;

    console.log(data);
  });
}
}
