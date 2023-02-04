import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css']
})
export class PersonalInfoComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  onImageUpload(uploadInput:HTMLInputElement){
    uploadInput.click();
  }
  onUploadImageInputChange(event:Event){
    var inp:any = event.target as HTMLInputElement;
    var fileReader = new FileReader();
    fileReader.readAsDataURL(inp.files[0]);
    fileReader.onload = function(){
      var imageBaseUrl = fileReader.result;
      console.log(imageBaseUrl)
    }
  }

  onSubmit(form:NgForm){
    console.log(form.value);
    // this.router.navigate(['experience'])
  }
}
