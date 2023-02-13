import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonalInfo } from '../model/PersonalInfo.model';
import { UserInformationData } from '../model/UserInformationData.model';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  constructor(private router:Router) { }

  ngOnInit(): void {
  } 

  goBackToHomePage(){
    this.router.navigate([''])
  }




}
