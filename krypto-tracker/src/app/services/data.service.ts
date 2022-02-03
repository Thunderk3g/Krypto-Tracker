import { EventEmitter, Injectable } from '@angular/core';
import { Subscription } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  private data: any ;
  invokeAddToWatchList = new EventEmitter();    
  subsVar: Subscription; 
    constructor() { 
      
    }
  onPushTable(obj: { name: any; iconUrl: any; rank: any; btcPrice:any ;marketCap: any ; symbol :any; price : any; change: any}) {
    this.data = obj;
  }
  getdata() {
    return this.data;
  }
  onAddtoWathlist() {    
    this.invokeAddToWatchList.emit();    
  }    
}
