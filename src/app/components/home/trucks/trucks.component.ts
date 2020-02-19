import {AfterViewInit, Component, OnInit, ViewContainerRef} from '@angular/core';
import {TrucksService} from '@src/app/services/trucks.service';
import {HomeComponent} from '../home.component';

@Component({
    selector: 'app-trucks',
    templateUrl: './trucks.component.html',
    styleUrls: ['./trucks.component.scss'],
})
export class TrucksComponent implements OnInit, AfterViewInit {
    title = 'frontend';

    constructor(private _vcRef: ViewContainerRef,
                private trucksService: TrucksService) {
    }

    ngOnInit() {
    }

    ngAfterViewInit() {
    }

    getDollarSign(price: number) {
        switch (price) {
            case 1:
                return '$';
            case 2:
                return '$$';
            case 3:
                return '$$$';

        }
    }

    getStars(rating: number) {
        switch (rating) {
            case 1:
                return '★';
            case 2:
                return '★★';
            case 3:
                return '★★★';
            case 4:
                return '★★★★';
            case 5:
                return '★★★★★';
        }
    }

    onScroll(args: any) {
    }

    onTap(args: any): void {

    }
}
