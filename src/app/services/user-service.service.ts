import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { PersonalInfo } from '../model/PersonalInfo.model';
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  dataEmitter = new BehaviorSubject<string>("");
  
  raiseDataEmitter(data:string){
    this.dataEmitter.next(data)
  }
  
  constructor() {

  }
}

