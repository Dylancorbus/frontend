import {Routes} from '@angular/router';

import {HomeComponent} from '@src/app/components/home/home.component';
import {LoginComponent} from '@src/app/components/login/login.component';
import {ProfileComponent} from '@src/app/components/profile/profile.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full',
    },
    {
        path: '',
        redirectTo: '/trucks',
        pathMatch: 'full',
    },
    {
        path: 'home',
        component: HomeComponent,
    },
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: 'profile',
        component: ProfileComponent,
    },
];
