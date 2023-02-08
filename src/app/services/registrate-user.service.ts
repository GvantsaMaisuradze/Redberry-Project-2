import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { addEducation, addExperience, addPersonalInfo, addUserData } from '../actions/registrationAction';
import { UserInformationData } from '../model/UserInformationData.model';

@Injectable({
  providedIn: 'root'
})
export class RegistrateUserService {

  constructor(private store:Store<{userInformationData:UserInformationData}>) { 
    this.store.dispatch(new addUserData())
  }

  getUserInformationStore():any{
    return this.store.pipe(select("userInformation" as any));
  }

  addPersonalInfo(personalInfo:any){
    this.store.dispatch(new addPersonalInfo(personalInfo))
  }
  addExperienceInfo(experienceInfo:any){
    this.store.dispatch(new addExperience(experienceInfo))
  }
  addEducationInfo(educationInfo:any){
    this.store.dispatch(new addEducation(educationInfo))
  }
}
