import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule} from '@angular/http';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './header/app.component';
import { WorkComponent } from './work/work.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { AddComponent } from './admin/add/add.component';


import { HttpErrorHandler } from './http-error-handler.service';
import { MessageService } from './message.service';
import {VacanciesService}from './admin/vacancies.service'

import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { UserService } from './user.service';
import { CookieService } from 'ngx-cookie-service'
import { isAuthorized } from './isAuthorized'


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    AddComponent,
    WorkComponent,
    LoginComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    HttpClientModule,
    CKEditorModule
  ],
  providers: [MessageService,HttpErrorHandler,VacanciesService, UserService, CookieService, isAuthorized],
  bootstrap: [AppComponent]
})
export class AppModule { }
