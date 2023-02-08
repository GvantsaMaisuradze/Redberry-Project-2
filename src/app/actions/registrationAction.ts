import { Action } from "@ngrx/store";
import { Education } from "../model/Educatuin.model";
import { Experience } from "../model/Experience.model";
import { PersonalInfo } from "../model/PersonalInfo.model";
import { RegistrationActionsTypes } from "./actionTypes.model";

export class BaseAction implements Action{
    type!:string;
    payload!:any
}
export class addUserData extends BaseAction{
    constructor(){
        super();
        super.type = RegistrationActionsTypes.addUserData
        if(localStorage['userInformationState']!=undefined){
            super.payload = JSON.parse(localStorage['userInformationState'])
        }
        super.payload = null;
    }
} 

export class addPersonalInfo extends BaseAction{
    constructor(payload:PersonalInfo){
        super();
        super.type = RegistrationActionsTypes.addPersonalInfo
        super.payload = payload
    }
} 
export class addExperience extends BaseAction{
    constructor(payload:Experience){
        super();
        super.type = RegistrationActionsTypes.addExperience
        super.payload = payload
    }
} 
export class addEducation extends BaseAction{
    constructor(payload:Education){
        super();
        super.type = RegistrationActionsTypes.addEducation
        super.payload = payload
    }
} 