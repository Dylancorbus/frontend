import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from '@src/app/app-routing.module';
import { AppComponent } from '@src/app/app.component';
import { HomeComponent } from '@src/app/components/home/home.component';
import { LoginComponent } from '@src/app/components/login/login.component';
import { ProfileComponent } from '@src/app/components/profile/profile.component';
import { NavComponent } from '@src/app/components/nav/nav.component';
import {HttpClientModule} from '@angular/common/http';
import {HomeModule} from '@src/app/components/home/home.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ProfileComponent,
    NavComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HomeModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
