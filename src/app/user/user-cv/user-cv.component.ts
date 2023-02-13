import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-user-cv',
  templateUrl: './user-cv.component.html',
  styleUrls: ['./user-cv.component.css'],
  providers:[UserServiceService]
})
export class UserCvComponent implements OnInit {

  constructor(private userService:UserServiceService) { }

  ngOnInit(): void {
  }

}
