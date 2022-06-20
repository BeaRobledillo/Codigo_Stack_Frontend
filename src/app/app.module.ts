import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { FooterComponent } from './footer/footer.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommentComponent } from './comment/comment.component';
import { UserComponent } from './user/user.component';
import { ServiceComponent } from './service/service.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PostComponent } from './post/post.component';
import { LoginformComponent } from './loginform/loginform.component';

import { UserpageComponent } from './userpage/userpage.component';

import { SingupComponent } from './singup/singup.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostdetailsComponent } from './postdetails/postdetails.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    CommentComponent,
    UserComponent,
    ServiceComponent,
    LoginComponent,
    NavbarComponent,
    PostComponent,
    LoginformComponent,
   

    UserpageComponent,

    SingupComponent,
      PostListComponent,
      PostdetailsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
