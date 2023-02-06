import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AddUser, addUserInfoData } from '../actions/user.action';
import { User } from '../model/user-data.model';
import { UserDate } from '../model/userdate.model';

@Injectable({
  providedIn: 'root'
})
export class AddInfoService {

  constructor(private store:Store<{userDate:UserDate}>) { 
    this.store.dispatch(new addUserInfoData())
  }

  getUserDataStore():any {
    return this.store.pipe(select("userInfo" as any));
  }

  addUserInfo(userData:any){
    this.store.dispatch(new AddUser(userData))
  }
}
