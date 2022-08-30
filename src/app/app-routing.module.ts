import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './login/sign-in/sign-in.component';
import { SignUpComponent } from './login/sign-up/sign-up.component';


const routes: Routes = [
  // {path:"", loadChildren:() => import('./home/home.module').then(m =>m.HomeModule)},
  // {path:"login", loadChildren:() => import('./login/login.module').then(m =>m.LoginModule)}
  {path:"home",component:HomeComponent},
  {path:"signin",component:SignInComponent},
  {path:"signup",component:SignUpComponent},
  {path:"",redirectTo:"/home",pathMatch:"full"},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
