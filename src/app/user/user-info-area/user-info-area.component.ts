import { Component, Input, OnInit } from '@angular/core';
import { Education } from 'src/app/model/Educatuin.model';
import { Experience } from 'src/app/model/Experience.model';
import { PersonalInfo } from 'src/app/model/PersonalInfo.model';
import { UserInfo, UserInformationData } from 'src/app/model/UserInformationData.model';
import { RegistrateUserService } from 'src/app/services/registrate-user.service';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-user-info-area',
  templateUrl: './user-info-area.component.html',
  styleUrls: ['./user-info-area.component.css']
})
export class UserInfoAreaComponent implements OnInit {
  
  user!:UserInfo;
  
  userInformationData:UserInformationData = new UserInformationData();
  constructor( private registrateUser:RegistrateUserService,
    private userService:UserServiceService) { }


  ngOnInit(): void {
    this.userService.dataEmitter.subscribe((response:any)=>{
      this.user = response;
    })
  }
}
