import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {NativeScriptModule} from 'nativescript-angular/nativescript.module';

import {AppRoutingModule} from '@src/app/app-routing.module';
import {AppComponent} from '@src/app/app.component';
import {HomeComponent} from '@src/app/components/home/home.component';
import {LoginComponent} from '@src/app/components/login/login.component';
import {ProfileComponent} from '@src/app/components/profile/profile.component';

import {NativeScriptFormsModule} from 'nativescript-angular/forms';

import {NativeScriptHttpClientModule} from 'nativescript-angular/http-client';
import {NativeScriptUISideDrawerModule} from 'nativescript-ui-sidedrawer/angular';
import { NavComponent } from '@src/app/components/nav/nav.component';
import {HomeModule} from '@src/app/components/home/home.module.tns';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        ProfileComponent,
        NavComponent,
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptHttpClientModule,
        NativeScriptFormsModule,
        HomeModule,
        NativeScriptUISideDrawerModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
    schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {
}
