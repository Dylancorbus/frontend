import {Routes} from '@angular/router';
import {TrucksComponent} from '@src/app/components/home/trucks/trucks.component';
import {TruckDetailComponent} from '@src/app/components/home/truck-detail/truck-detail.component';
import {TrucksService} from '@src/app/services/trucks.service';
import {CartService} from '@src/app/services/cart.service';
import {ItemComponent} from '@src/app/components/home/item/item.component';

export const componentDeclarations: any[] = [
    TrucksComponent,
    TruckDetailComponent,
    ItemComponent
];

export const providerDeclarations: any[] = [
    TrucksService,
    CartService
];

export const routes: Routes = [
    {path: 'trucks', component: TrucksComponent},
    {
        path: 'truck-actionbar',
        component: TrucksComponent,
        data: {title: 'Main page'},
        children: [
            {
                path: 'modal-view',
                component: TruckDetailComponent,
                children: [
                    {
                        path: 'modal-view',
                        component: ItemComponent
                    }
                ]
            }
        ]
    },
    {path: 'truck/:id', component: TruckDetailComponent},
    {path: 'item', component: ItemComponent}
];
