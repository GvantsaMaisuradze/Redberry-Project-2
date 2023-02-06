import { Action } from "@ngrx/store";
import { User} from "../model/user-data.model";
import { UserActionTypes } from "./action-types.model";

export class BaseAction implements Action{
    type!: string;
    payload!:User
}

export class AddUser extends BaseAction{
    constructor(payload:User){
        super();
        super.type = UserActionTypes.addUserInfo
        super.payload = payload 
    }
}
export class addUserInfoData extends BaseAction{
    constructor(){
        super();
        super.type = UserActionTypes.addUserInfoData
        super.payload = localStorage ['addUserInfoData']
    }
}