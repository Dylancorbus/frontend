import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Truck } from '../models/truck';

@Injectable({
  providedIn: 'root'
})
export class TrucksService {

  public nearbyTrucks: Array<Truck> = [
    {
      name: 'Some Interesting Food truck name',
      image: 'https://images.unsplash.com/photo-1460306855393-0410f61241c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
      rating: 5,
      address: '6875 e camelback',
      phone: 14087227387,
      priceLevel: 2,
      foodType: 'American'
    },
    {
      name: 'Some Interesting Food truck name',
      image: 'https://images.unsplash.com/photo-1460306855393-0410f61241c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
      rating: 5,
      address: '6875 e camelback',
      phone: 14087227387,
      priceLevel: 2,
      foodType: 'American'
    },
    {
      name: 'Some Interesting Food truck name',
      image: 'https://images.unsplash.com/photo-1460306855393-0410f61241c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
      rating: 5,
      address: '6875 e camelback',
      phone: 14087227387,
      priceLevel: 2,
      foodType: 'American'
    },
    {
      name: 'Some Interesting Food truck name',
      image: 'https://images.unsplash.com/photo-1460306855393-0410f61241c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
      rating: 5,
      address: '6875 e camelback',
      phone: 14087227387,
      priceLevel: 2,
      foodType: 'American'
    },
    {
      name: 'Some Interesting Food truck name',
      image: 'https://images.unsplash.com/photo-1460306855393-0410f61241c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
      rating: 5,
      address: '6875 e camelback',
      phone: 14087227387,
      priceLevel: 2,
      foodType: 'American'
    },
    {
      name: 'Some Interesting Food truck name',
      image: 'https://images.unsplash.com/photo-1460306855393-0410f61241c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
      rating: 5,
      address: '6875 e camelback',
      phone: 14087227387,
      priceLevel: 2,
      foodType: 'American'
    },
    {
      name: 'Some Interesting Food truck name',
      image: 'https://images.unsplash.com/photo-1460306855393-0410f61241c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
      rating: 5,
      address: '6875 e camelback',
      phone: 14087227387,
      priceLevel: 2,
      foodType: 'American'
    }
  ];

  constructor(private httpClient: HttpClient) { }

  getAvailableTrucks() {

  }
}
