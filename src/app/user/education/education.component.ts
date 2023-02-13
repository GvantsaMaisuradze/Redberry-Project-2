import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProxyHttpService } from 'src/app/services/proxy-http.service';
import { RegistrateUserService } from 'src/app/services/registrate-user.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
educationRegistration!:FormGroup;
dropDownItems!:any[];


  constructor(private router:Router,private formBuilder:FormBuilder,
    private registrateUser:RegistrateUserService,
    private proxy:ProxyHttpService) { 
      this.educationRegistration = this.formBuilder.group({
        userEducations:this.formBuilder.array([])
      });
    }


    getDegreeData(){
      this.proxy.getAllServices().subscribe((response:any)=>{
        this.dropDownItems = response;
        console.log(this.dropDownItems)
          
        })
    }

  getAllUserEducationInfo():FormArray{
    return this.educationRegistration.get("userEducations") as FormArray
  }
  
  createNewUserEducationInfo():FormGroup{
    return this.formBuilder.group({
      "institute":new FormControl(null,[Validators.required,Validators.minLength(2)]),
      "degreeId":new FormControl(null,Validators.required),
      "dueDate":new FormControl(null,Validators.required),
      "description":new FormControl(null,Validators.required),
      newEducation:this.formBuilder.array([])
    })
  }
  getNewEducation(educationIndex:any):FormArray{
    return this.getAllUserEducationInfo().at(educationIndex).get("newEducation") as FormArray
  }

  ngOnInit(): void {
    this.getDegreeData();
    this.registrateUser.getUserInformationStore().subscribe((response:any) =>{
      console.log(response)
    })
  }
  createNewEducation():FormGroup{
    return this.formBuilder.group({
      "institute":new FormControl(null,[Validators.required,Validators.minLength(2)]),
      "degreeId":new FormControl(null,Validators.required),
      "dueDate":new FormControl(null,Validators.required),
      "description":new FormControl(null,Validators.required)
    })
  }

  addNewUserEducation():void{
    this.getAllUserEducationInfo().push(this.createNewUserEducationInfo())
  }
  addNewEducation(educationIndex:any):void{
    this.getNewEducation(educationIndex).push(this.createNewEducation())
  }
  onFormSubmit(){
    this.registrateUser.addEducationInfo(this.educationRegistration.value)
  }
  onClickNextPage(){
    this.router.navigate(['user-cv'])
  }

}
