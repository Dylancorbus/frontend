import {Routes} from '@angular/router';
import {TrucksComponent} from '@src/app/components/home/trucks/trucks.component';
import {TruckDetailComponent} from '@src/app/components/home/truck-detail/truck-detail.component';
import {TrucksService} from '@src/app/services/trucks.service';

export const componentDeclarations: any[] = [
    TrucksComponent,
    TruckDetailComponent
];

export const providerDeclarations: any[] = [
    TrucksService
];

export const routes: Routes = [
    { path: 'trucks', component: TrucksComponent },
    { path: 'truck/:id', component: TruckDetailComponent },
];
