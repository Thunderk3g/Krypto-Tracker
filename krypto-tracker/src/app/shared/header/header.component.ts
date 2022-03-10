import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../../services/token-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  menu: boolean = false;
  currentUser: any;
  username: any;
  tokenStorageService: any;
  isOpenedList: boolean = false;

  constructor(private token: TokenStorageService) {}

  ngOnInit() {
    this.currentUser = this.token.getUser();
  }

  openMenu() {
    this.isOpenedList = !this.isOpenedList;
  }
  menuDropdown() {
    this.menu = !this.menu;
  }
  logout() {
    window.sessionStorage.clear();
    window.location.reload();
  }
}
