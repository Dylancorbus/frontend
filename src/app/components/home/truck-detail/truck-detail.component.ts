import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Truck } from '@src/app/models/truck';
import { TrucksService } from '@src/app/services/trucks.service';
// import { RouterExtensions } from 'nativescript-angular/router';

@Component({
    selector: 'app-details',
    templateUrl: './truck-detail.component.html',
})
export class TruckDetailComponent implements OnInit {
    truck: Truck;

    constructor(
        private trucksService: TrucksService,
        private route: ActivatedRoute,
    ) { }

    goBack(): void {

    }

    ngOnInit(): void {
        const id = +this.route.snapshot.params['id'];
        this.truck = this.trucksService.getTruck(id);
    }
}
