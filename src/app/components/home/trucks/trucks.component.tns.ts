import {AfterViewInit, Component, OnInit, ViewContainerRef} from '@angular/core';
import {TrucksService} from '@src/app/services/trucks.service';
import { ModalDialogOptions, ModalDialogService } from 'nativescript-angular/modal-dialog';
import { HomeComponent } from '../home.component.tns';

@Component({
    selector: 'app-trucks',
    templateUrl: './trucks.component.html',
    providers: [ModalDialogService],
    styleUrls: ['./trucks.component.scss'],
})
export class TrucksComponent implements OnInit, AfterViewInit {
    title = 'frontend';

    constructor(private _modalService: ModalDialogService,
                private _vcRef: ViewContainerRef,
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

    onScroll(args: any) {}

    onTap(args: any): void {
        const options: ModalDialogOptions = {
            viewContainerRef: this._vcRef,
            context: {
                id: args
            },
            fullscreen: true
        };

        this._modalService.showModal(HomeComponent, options)
            .then((result: string) => {
                console.log(result);
            });
    }
}
