import { Injectable } from '@angular/core';
import { type, userInfo } from 'os';
import { BehaviorSubject, Subject } from 'rxjs';
import { UserInfo } from '../model/UserInformationData.model';
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

