import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buy-krypto',
  templateUrl: './buy-krypto.component.html',
  styleUrls: ['./buy-krypto.component.css']
})
export class BuyKryptoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.getLocation();
  }
  getLocation(){
    navigator.geolocation.getCurrentPosition(position => {
      const { latitude, longitude } = position.coords;
      console.log(latitude);
      console.log(longitude);
    });
  }
}
