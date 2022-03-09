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
  username:any;
  tokenStorageService: any;
  isOpenedList: any;
  openMenu(source: any) {
    this.isOpenedList = source;
}
closeMenu() {
    this.isOpenedList = -1;
}
  menuDropdown() {
    this.menu = !this.menu;
  }
  constructor(private token: TokenStorageService) { }

  ngOnInit(){
    this.currentUser = this.token.getUser();
    this.username = this.currentUser.email.match(/(.+)@/)[1]

  }
  logout(){
    window.sessionStorage.clear();
    window.location.reload();
  }
}
