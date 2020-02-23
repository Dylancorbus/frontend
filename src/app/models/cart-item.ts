import {MenuItem} from '@src/app/models/menu-item';

export class CartItem {
    id: number;
    item: MenuItem;
    options: Array<string>;
    quantity: number;
}
