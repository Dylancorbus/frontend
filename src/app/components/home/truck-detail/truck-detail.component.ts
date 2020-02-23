import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {Truck} from '@src/app/models/truck';
import {TrucksService} from '@src/app/services/trucks.service';

@Component({
    selector: 'app-details',
    templateUrl: './truck-detail.component.html',
})
export class TruckDetailComponent implements OnInit {
    truck: Truck;
    public title = 'Title';

    constructor(
        private trucksService: TrucksService,
        private route: ActivatedRoute,
    ) {
    }

    goBack(): void {

    }

    ngOnInit(): void {
        const id = +this.route.snapshot.params['id'];
        this.truck = this.trucksService.getTruck(id);
    }

    onScroll(args: any) {
    }
}
