import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; 

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { UserComponent } from './user/user.component';
import { PersonalInfoComponent } from './user/personal-info/personal-info.component';
import { ExperienceComponent } from './user/experience/experience.component';
import { EducationComponent } from './user/education/education.component';
import { HomeVwComponent } from './view/home-vw/home-vw.component';
import { UserInfoAreaComponent } from './user/user-info-area/user-info-area.component';
import { ActionReducer, StoreModule } from '@ngrx/store';
import { RegistrateInfoReducer } from './state-manager/RegistrateInfo.reducer';
import { UserInformationData } from './model/UserInformationData.model';
import { UserCvComponent } from './user/user-cv/user-cv.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeVwComponent,
    UserComponent,
    PersonalInfoComponent,
    ExperienceComponent,
    EducationComponent,
    UserInfoAreaComponent,
    UserCvComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot({
      userInformation:(RegistrateInfoReducer.Reduce as ActionReducer<UserInformationData>)
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
