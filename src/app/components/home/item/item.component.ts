import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {Truck} from '@src/app/models/truck';
import {CartService} from '@src/app/services/cart.service';
import {MenuItem} from '@src/app/models/menu-item';

@Component({
    selector: 'app-cart',
    templateUrl: './item.component.html',
})
export class ItemComponent implements OnInit {
    quantity = 1;
    item: MenuItem;
    total: number;

    constructor(
        private cartService: CartService,
        private route: ActivatedRoute,
    ) {
    }

    goBack(): void {

    }

    ngOnInit(): void {
    }

    onScroll(args: any) {
    }
}
