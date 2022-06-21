import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PostdetailsComponent } from './postdetails/postdetails.component';

const routes: Routes = [];
const appRoutes = [
  {path: 'home',component:HomeComponent},
  { path: 'login', component: LoginComponent },
  { path:'postdetails/:id', component:PostdetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
