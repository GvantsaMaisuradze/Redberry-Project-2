  import { UserActionTypes } from "../actions/action-types.model";
import { BaseAction } from "../actions/user.action";
import { User } from "../model/user-data.model";
import { UserDate } from "../model/userdate.model";

export class UserInfoReducer {
    static state:UserDate = new UserDate();

    public static Reduce(state = UserInfoReducer.state,action:BaseAction){
        switch(action.type){
            case UserActionTypes.addUserInfo:
                UserInfoReducer.state.userData = action.payload as User;
                UserInfoReducer.save();
                return UserInfoReducer.state;
                default:
                    return state;
            case UserActionTypes.addUserInfoData:
                UserInfoReducer.state = action.payload as UserDate;
                return UserInfoReducer.state
        }
    }

    private static save(){
        localStorage['userInfoState']=JSON.stringify(UserInfoReducer.state)
    }
}