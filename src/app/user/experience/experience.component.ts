import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
experienceRegistration!:FormGroup;


  constructor(private router:Router,private formBuilder:FormBuilder) {
    this.experienceRegistration = this.formBuilder.group({
      userExperiences:this.formBuilder.array([])
    });
   }
   getAllUserExperienceInfo():FormArray{
    return this.experienceRegistration.get("userExperiences") as FormArray
   }

   createNewUserExperienceInfo():FormGroup{
    return this.formBuilder.group({
    "position":new FormControl(null,[Validators.required,Validators.minLength(2)]),
    "employer":new FormControl(null,[Validators.required,Validators.minLength(2)]),
    "startDate":new FormControl(null,Validators.required),
    "dueDate":new FormControl(null,Validators.required),
    "description":new FormControl(null,Validators.required)
    })
   }


  ngOnInit(): void {
  }


  //------------------------ view Functions -----------------------

  addNewUserExperience():void{
    this.getAllUserExperienceInfo().push(this.createNewUserExperienceInfo())
  }
  onFormSubmit(){
    // this.router.navigate(['user/education'])
    console.log(this.experienceRegistration.value)
  }
}
