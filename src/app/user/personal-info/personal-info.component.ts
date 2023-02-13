import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrateUserService } from 'src/app/services/registrate-user.service';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css'],
})
export class PersonalInfoComponent implements OnInit {
  editUser!:string;
  uploadedImg!:any;
  personalInfoRegistration!:FormGroup;
  constructor(private router:Router, private registrateUser:RegistrateUserService,
    private userService:UserServiceService ) { }


  ngOnInit(): void {
    this.createNewUserPersonalInfo();
    this.registrateUser.getUserInformationStore().subscribe((response:any) =>{
      console.log(response)
    })
  }

  onInpValueChange(){
    this.userService.raiseDataEmitter(this.personalInfoRegistration.value)
  }

  onImageUpload(uploadInput:HTMLInputElement){
    uploadInput.click();
  }
  onUploadImageInputChange(event:Event){
    var self = this;
    var inp:any = event.target as HTMLInputElement;
    var fileReader = new FileReader();
    fileReader.readAsDataURL(inp.files[0]);
    fileReader.onload = function(){
      self.personalInfoRegistration.value.image = (fileReader.result ?? "").toString();
      
    }
  }

  
  createNewUserPersonalInfo(){
  this.personalInfoRegistration = new FormGroup({
    "name":new FormControl(null,[Validators.required,Validators.minLength(2),Validators.pattern(/[ა-ჰ]+$/g)]),
    "surname":new FormControl(null,[Validators.required,Validators.minLength(2),Validators.pattern(/[ა-ჰ]+$/g)]),
    "image":new FormControl(null),
    "aboutMe":new FormControl(null),
    "email":new FormControl(null,[Validators.required,Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[redberry.-]+\\.[ge]{2,4}$')]),
    "phoneNumber":new FormControl(null,[Validators.required,Validators.pattern("^[+][995]?[0-9]{12}$")]),
  })
 }

 onFormSubmit(){
  // this.personalInfoRegistration.value.image = this.onUploadImageInputChange
  // console.log(this.personalInfoRegistration.value);
  this.registrateUser.addPersonalInfo(this.personalInfoRegistration.value)
  
  this.router.navigate(['user/experience'])
}
}

