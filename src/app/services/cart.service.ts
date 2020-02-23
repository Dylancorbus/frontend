import {Injectable} from '@angular/core';
import {CartItem} from '@src/app/models/cart-item';

@Injectable({
    providedIn: 'root'
})
export class CartService {

    public cartItem: Array<CartItem>;

    constructor() {
    }

    public getCart() {
        return null;
    }
}
