import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddFormComponent } from './add-form/add-form.component';
import {AppComponent} from './app.component'
import { LoginFormComponent } from './login-form/login-form.component';
import { EditFormComponent } from './edit-form/edit-form.component';
const routes: Routes = [
  {
    path:'',redirectTo:'signup',pathMatch:'full'
  },
  {
    path:'home',component:AppComponent
  },
  {
    path:'signup',component:AddFormComponent
  },
  {
    path:'login',component:LoginFormComponent
  },
  {
    path:'edit',component:EditFormComponent
  },
  // {
  //   path:'login',
  //   children:[
  //     {
  //       path:'sign-up-page',component:SignUpPageComponent
  //     }
  //   ]
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
