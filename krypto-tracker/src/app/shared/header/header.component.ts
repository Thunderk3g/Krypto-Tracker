import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../../services/token-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  menu: boolean = false;
  currentUser: any;
  tokenStorageService: any;
  menuDropdown() {
    this.menu = !this.menu;
  }
  constructor(private token: TokenStorageService) { }

  ngOnInit(){
    this.currentUser = this.token.getUser();
  }
  logout(){
    window.sessionStorage.clear();
    window.location.reload();
  }
}
