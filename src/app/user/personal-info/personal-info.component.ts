import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { RegistrateUserService } from 'src/app/services/registrate-user.service';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css']
})
export class PersonalInfoComponent implements OnInit {
  userRegistration!:FormGroup;
  constructor( private registrateUser:RegistrateUserService ) { }

  ngOnInit(): void {
    this.createNewUser();
    this.registrateUser.getUserInformationStore().subscribe((response:any) =>{
      console.log(response);
    })
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
      var imageBaseUrl = fileReader.result;
      console.log(imageBaseUrl)
      
    }
  }

 createNewUser(){
  this.userRegistration = new FormGroup({
    "name":new FormControl(null,[Validators.required,Validators.minLength(2),Validators.pattern(/[ა-ჰ]+$/g)]),
    "surname":new FormControl(null,[Validators.required,Validators.minLength(2),Validators.pattern(/[ა-ჰ]+$/g)]),
    "image":new FormControl(null),
    "about":new FormControl(null),
    "email":new FormControl(null,[Validators.required,Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[redberry.-]+\\.[ge]{2,4}$')]),
    "phoneNumber":new FormControl(null,[Validators.required,Validators.pattern("^[+][995]?[0-9]{12}$")]),
  })
 }
 onFormSubmit(){
  // console.log(this.userRegistration.value);
  this.registrateUser.addPersonalInfo(this.userRegistration.value)
  // this.router.navigate(['experience'])

}
}
