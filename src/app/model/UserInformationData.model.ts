import { Education } from "./Educatuin.model";
import { Experience } from "./Experience.model";
import { PersonalInfo } from "./PersonalInfo.model";

export class UserInformationData{
    public personalInfoData!:PersonalInfo;
    public experienceData!:Experience;
    public educationData!:Education;
}