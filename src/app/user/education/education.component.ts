import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrateUserService } from 'src/app/services/registrate-user.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
educationRegistration!:FormGroup;


  constructor(private router:Router,private formBuilder:FormBuilder,
    private registrateUser:RegistrateUserService) { 
      this.educationRegistration = this.formBuilder.group({
        userEducations:this.formBuilder.array([])
      });
    }




  getAllUserEducationInfo():FormArray{
    return this.educationRegistration.get("userEducations") as FormArray
  }
  
  createNewUserEducationInfo():FormGroup{
    return this.formBuilder.group({
      "institute":new FormControl(null,[Validators.required,Validators.minLength(2)]),
      "degreeId":new FormControl(null,Validators.required),
      "dueDate":new FormControl(null,Validators.required),
      "description":new FormControl(null,Validators.required)
    })
  }

  ngOnInit(): void {
    this.registrateUser.getUserInformationStore().subscribe((response:any) =>{
      console.log(response)
    })
  }

  addNewUserEducation():void{
    this.getAllUserEducationInfo().push(this.createNewUserEducationInfo())
  }
  onFormSubmit(){
    // this.router.navigate(['user-info-area'])
    this.registrateUser.addEducationInfo(this.educationRegistration.value)
  }
  onClickNextPage(){
    this.router.navigate(['user-info-area'])
  }

}
