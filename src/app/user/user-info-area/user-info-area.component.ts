import { Component, OnInit } from '@angular/core';
import { UserInformationData } from 'src/app/model/UserInformationData.model';
import { RegistrateUserService } from 'src/app/services/registrate-user.service';

@Component({
  selector: 'app-user-info-area',
  templateUrl: './user-info-area.component.html',
  styleUrls: ['./user-info-area.component.css']
})
export class UserInfoAreaComponent implements OnInit {
  userInformationData:UserInformationData = new UserInformationData();
  constructor( private registrateUser:RegistrateUserService) { }
  ngOnInit(): void {
    this.registrateUser.getUserInformationStore().subscribe((response:any) =>{
    this.userInformationData = response
    })
  }

}
