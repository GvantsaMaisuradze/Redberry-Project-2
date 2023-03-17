import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Education } from '../model/Educatuin.model';
import { Experience } from '../model/Experience.model';
import { PersonalInfo } from '../model/PersonalInfo.model';

import { UserInfo, UserInformationData } from '../model/UserInformationData.model';
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  public dataEmitter = new BehaviorSubject(PersonalInfo)
  public experienceDataEmitter = new BehaviorSubject(Experience)
  public educationDataEmitter = new BehaviorSubject(Education)
  raiseDataEmitter(data:any){
    this.dataEmitter.next(data)
  }
  raiseExperienceDataEmitter(data:any){
    this.experienceDataEmitter.next(data)
  }
  raiseEducationDataEmitter(data:any){
    this.educationDataEmitter.next(data)
  }
  
  constructor() {

  }
}

