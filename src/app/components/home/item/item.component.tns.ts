import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Page} from 'tns-core-modules/ui/page';
import {Truck} from '@src/app/models/truck';
import {TrucksService} from '@src/app/services/trucks.service';
import {RouterExtensions} from 'nativescript-angular/router';
import {ScrollEventData, ScrollView} from 'tns-core-modules/ui/scroll-view';
import {Image} from 'tns-core-modules/ui/image';
import {Button} from 'tns-core-modules/ui/button';
import {Label} from 'tns-core-modules/ui/label';
import {CartService} from '@src/app/services/cart.service';
import {ModalDialogParams, ModalDialogService} from 'nativescript-angular/modal-dialog';
import {MenuItem} from '@src/app/models/menu-item';


@Component({
    selector: 'app-cart',
    templateUrl: './item.component.html',
    providers: [ModalDialogService],
    styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

    quantity = 1;
    item: MenuItem;
    total: number = null;
    spclInstructions: string;

    constructor(
        private cartService: CartService,
        private trucksService: TrucksService,
        private route: ActivatedRoute,
        private params: ModalDialogParams,
        private routerExtensions: RouterExtensions,
        private page: Page
    ) {
    }

    onClose(): void {
        this.params.closeCallback('return value');
    }

    goBack(): void {

    }

    ngOnInit(): void {
        console.log(this.params.context.id);
        const id = this.params.context.id;
        const category = this.params.context.category;
        this.item = this.trucksService.getItem(id, category);
        this.total = this.item.price;
        this.spclInstructions = '';
    }

    increment() {
        if (this.quantity < 10) {
            this.quantity += 1;
            this.total = Math.round(((this.item.price * this.quantity) + Number.EPSILON) * 100) / 100;
            console.log(this.total);
        }
    }

    decrement() {
        console.log('here')
        if (this.quantity > 0) {
            this.quantity -= 1;
            this.total = Math.round(((this.item.price * this.quantity) + Number.EPSILON) * 100) / 100;
        }
    }

    scaleFormula(current: number, totalMin: number, totalMax: number, scaledMin: number, scaledMax: number):
        number {
        return (scaledMax - scaledMin) * (current - totalMin) / (totalMax - totalMin) + scaledMin;
    }
}
