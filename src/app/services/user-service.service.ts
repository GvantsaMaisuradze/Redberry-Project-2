import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  dataEmitter = new BehaviorSubject<string>('')
  raiseDataEmitter(data:any){
    this.dataEmitter.next(data)
  }
  
  constructor() {

  }
}

