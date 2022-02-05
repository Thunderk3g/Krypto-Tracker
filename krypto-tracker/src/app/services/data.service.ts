import { EventEmitter, Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Subscription } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  li : any;
  private data: any ;
  invokeAddToWatchList = new EventEmitter();    
  subsVar: Subscription; 
    constructor(private apiService: ApiService ) { 
      
    }
  onPushTable(obj: { uuid :any}) {
    this.data = obj;
  }
  getdata() {
    return this.data;
  }
  onAddtoWathlist() {    
    this.invokeAddToWatchList.emit();    
  }    
}
