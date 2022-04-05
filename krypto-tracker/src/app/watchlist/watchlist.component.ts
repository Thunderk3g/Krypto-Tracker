import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { TokenStorageService } from '../services/token-storage.service';
import {millify} from 'millify';
import Swal from 'sweetalert2';

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
  isEmpty:boolean =false;
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
    if(typeof this.li !== 'undefined' && this.li.length === 0){
      this.isEmpty = true;
    }
  });
}
delFav(name:any){
  Swal.fire({
    title: 'Do you want to delete this from watchlist?',
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: 'Delete',
    denyButtonText: `Don't Delete`,
  }).then((result) => {
    if (result.isConfirmed) {
      this.apiService
      this.apiService.delfav({
        userId: this.currentUser.email,
        name:name
      }).subscribe((data) => {
        Swal.fire('Saved!', '', 'success').then((result) => {
          window.location.reload();

        });
      });
    } else if (result.isDenied) {
      Swal.fire('Changes are not saved', '', 'info')
    }
  })
}
}
