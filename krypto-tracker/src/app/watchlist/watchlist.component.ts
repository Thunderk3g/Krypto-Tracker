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
    this.currentUser = this.token.getUser();
    this.currentToken = this.token.getToken();
  }  
  
  ngOnInit(): void {  
    this.currentUser = this.token.getUser();
    if (this.currentUser != null){ 
    this.getFav();
    }
  }  
getFav(){
  this.apiService.getfav({
    userId: this.currentUser.email
  }).subscribe((data) => {
    this.li = data;

    console.log(data);
  });
}
delFav(index:any){
  this.apiService.delfav({
    userId: this.currentUser.email,
    name:this.li[index].name
  }).subscribe((data) => {
    this.li = data;
    console.log(data);
  });
  window.location.reload();

}
}
