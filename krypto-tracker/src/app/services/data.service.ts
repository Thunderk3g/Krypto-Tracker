import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  private data: any ;

  constructor() { }
  onPushTable(obj: { name: any; iconUrl: any; rank: any; btcPrice:any ;marketCap: any ; symbol :any; price : any;}) {
    this.data = obj;
  }
  getdata() {
    return this.data;
  }
}
