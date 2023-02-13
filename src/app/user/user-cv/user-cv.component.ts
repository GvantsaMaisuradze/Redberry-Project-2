import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/services/alert.service';
import { UserServiceService } from 'src/app/services/user-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-cv',
  templateUrl: './user-cv.component.html',
  styleUrls: ['./user-cv.component.css'],
  providers:[UserServiceService]
})
export class UserCvComponent implements OnInit {
  constructor(private alert:AlertService) { }

  ngOnInit(): void {
    this.alert.successEmitter.subscribe(response =>{
      this.showAlert();
    })
  }

  showAlert(){
    Swal.fire({
      title: 'რეზიუმე წარმატებით გაიგზავნა  🎉',
      timer:2000,
      showConfirmButton:false
    })
  }
}
