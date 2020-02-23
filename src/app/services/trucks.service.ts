import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Truck} from '../models/truck';
import {Menu} from '@src/app/models/menu';
import {MenuItem} from '@src/app/models/menu-item';
import {MenuCategory} from '@src/app/models/menu-category';

@Injectable({
    providedIn: 'root'
})
export class TrucksService {

    public nearbyTrucks: Array<Truck> = [
        {
            name: 'Food truck name',
            id: 23,
            image: 'https://images.unsplash.com/photo-1460306855393-0410f61241c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
            rating: 5,
            address: '6875 e camelback',
            phone: 14087227387,
            priceLevel: 2,
            foodType: 'American'
        },
        {
            name: 'Food truck name',
            id: 23,
            image: 'https://images.unsplash.com/photo-1460306855393-0410f61241c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
            rating: 5,
            address: '6875 e camelback',
            phone: 14087227387,
            priceLevel: 2,
            foodType: 'American'
        },
        {
            name: 'Food truck name',
            id: 23,
            image: 'https://images.unsplash.com/photo-1460306855393-0410f61241c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
            rating: 5,
            address: '6875 e camelback',
            phone: 14087227387,
            priceLevel: 2,
            foodType: 'American'
        },
        {
            name: 'Food truck name',
            id: 23,
            image: 'https://images.unsplash.com/photo-1460306855393-0410f61241c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
            rating: 5,
            address: '6875 e camelback',
            phone: 14087227387,
            priceLevel: 2,
            foodType: 'American'
        },
        {
            name: 'Food truck name',
            id: 23,
            image: 'https://images.unsplash.com/photo-1460306855393-0410f61241c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
            rating: 5,
            address: '6875 e camelback',
            phone: 14087227387,
            priceLevel: 2,
            foodType: 'American'
        },
        {
            name: 'Food truck name',
            id: 23,
            image: 'https://images.unsplash.com/photo-1460306855393-0410f61241c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
            rating: 5,
            address: '6875 e camelback',
            phone: 14087227387,
            priceLevel: 2,
            foodType: 'American'
        },
        {
            name: 'Food truck name',
            id: 23,
            image: 'https://images.unsplash.com/photo-1460306855393-0410f61241c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
            rating: 5,
            address: '6875 e camelback',
            phone: 14087227387,
            priceLevel: 2,
            foodType: 'American'
        }
    ];

    wings: MenuItem = {
        title: 'Chicken Wings',
        image: 'someimage',
        price: 5.58,
        description: 'great food and made with chicken.'
    };
    garlicBread: MenuItem = {
        title: 'Garlic Bread',
        image: 'someimage',
        price: 5.00,
        description: 'Home made bread with garlic.'
    };
    nachos: MenuItem = {
        title: 'Nachos',
        image: 'someimage',
        price: 7.00,
        description: 'Chips and cheese.'
    };
    beer: MenuItem = {
        title: 'Corona',
        image: 'someimage',
        price: 5.00,
        description: 'Imported mexican beer.'
    };
    wine: MenuItem = {
        title: 'Chardonay',
        image: 'someimage',
        price: 5.00,
        description: 'Wine from napa valley.'
    };
    brisket: MenuItem = {
        title: 'Brisket Sandwhich',
        image: 'someimage',
        price: 10.00,
        description: 'BBQ brisket sandwhich served with a side of beans.'
    };
    ribs: MenuItem = {
        title: 'BBQ Ribs',
        image: 'someimage',
        price: 5.00,
        description: 'Slow smoked baby back ribs.'
    };
    cake: MenuItem = {
        title: 'Cheesecake',
        image: 'someimage',
        price: 5.00,
        description: 'Home made cheesecake'
    };
    churros: MenuItem = {
        title: 'Churros',
        image: 'someimage',
        price: 5.00,
        description: 'Home made churros'
    };


    starters: MenuCategory = {
        category: 'Starters',
        menuItems: [this.wings, this.garlicBread, this.nachos]
    };
    drinks: MenuCategory = {
        category: 'Drinks',
        menuItems: [this.beer, this.wine]
    };
    main: MenuCategory = {
        category: 'Entrees',
        menuItems: [this.ribs, this.brisket]
    };
    dessert: MenuCategory = {
        category: 'Dessert',
        menuItems: [this.cake, this.churros]
    };
    selectedTruckMenu: Menu = {
        truckId: 23,
        menuCategories: [this.starters, this.drinks, this.main, this.dessert]
    };

    constructor(private httpClient: HttpClient) {
    }

    getTrucks(): Truck[] {
        return null;
    }

    getTruck(id: number): Truck {
        return this.nearbyTrucks.find(trk => trk.id === id);
    }
}
