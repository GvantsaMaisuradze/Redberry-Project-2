import { RegistrationActionsTypes } from "../actions/actionTypes.model";
import { BaseAction } from "../actions/registrationAction";
import { Education } from "../model/Educatuin.model";
import { Experience } from "../model/Experience.model";
import { PersonalInfo } from "../model/PersonalInfo.model";
import { UserInformationData } from "../model/UserInformationData.model";

export class RegistrateInfoReducer {
    static state:UserInformationData = new UserInformationData()

    public static Reduce(state=RegistrateInfoReducer.state,action:BaseAction){
        var tmp = new UserInformationData()
        switch(action.type){
            case RegistrationActionsTypes.addUserData:
                if(action.payload !=null)
                    RegistrateInfoReducer.state = action.payload as UserInformationData;                
                return RegistrateInfoReducer.state;
            case RegistrationActionsTypes.addPersonalInfo:
                tmp.personalInfoData =  action.payload as PersonalInfo;
                RegistrateInfoReducer.state=tmp;
                RegistrateInfoReducer.save();
                return RegistrateInfoReducer.state;
            case RegistrationActionsTypes.addExperience:
                tmp.experienceData = action.payload as Experience;
                RegistrateInfoReducer.state = tmp;
                RegistrateInfoReducer.save();
                return RegistrateInfoReducer.state;
            case RegistrationActionsTypes.addEducation:
                tmp.educationData = action.payload as Education;
                RegistrateInfoReducer.state =tmp;
                RegistrateInfoReducer.save();
                return RegistrateInfoReducer.state;
                default:
                    return state;
        }
    }

    private static save(){
        localStorage['userInformationState']=JSON.stringify(RegistrateInfoReducer.state)
    }
}