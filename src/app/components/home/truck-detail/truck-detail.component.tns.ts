import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ModalDialogParams} from 'nativescript-angular/modal-dialog';
import {Page} from 'tns-core-modules/ui/page';
import {Truck} from '@src/app/models/truck';
import {TrucksService} from '@src/app/services/trucks.service';
import {RouterExtensions} from 'nativescript-angular/router';

@Component({
    selector: 'app-details',
    templateUrl: './truck-detail.component.html',
    styleUrls: ['./truck-detail.component.scss']
})
export class TruckDetailComponent implements OnInit {
    truck: Truck;

    constructor(
        private trucksService: TrucksService,
        private route: ActivatedRoute,
        private routerExtensions: RouterExtensions,
        private _params: ModalDialogParams,
        private _page: Page
    ) {
    }

    goBack(): void {
        this.routerExtensions.back();
    }

    ngOnInit(): void {
        console.log(this._params.context.id)
        const id = this._params.context.id;
        this.truck = this.trucksService.getTruck(id);
    }

    onClose(): void {
        this._params.closeCallback('return value');
    }
}
