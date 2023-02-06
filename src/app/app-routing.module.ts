import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EducationComponent } from './user/education/education.component';
import { ExperienceComponent } from './user/experience/experience.component';
import { HomeVwComponent } from './view/home-vw/home-vw.component';
import { PersonalInfoComponent } from './user/personal-info/personal-info.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path:'',component:HomeVwComponent},
  {path:'user',component:UserComponent,
  children:[  
    {path:'',component:PersonalInfoComponent},
    {path:'experience',component:ExperienceComponent},
    {path:'education',component:EducationComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
