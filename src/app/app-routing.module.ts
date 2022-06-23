import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DeleteComponent } from './delete/delete.component';

const routes: Routes = [];
const appRoutes = [
  { path: '/login', component: LoginComponent,  pathMatch: 'full'}, 
  { path: '/delete', component: DeleteComponent, pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
