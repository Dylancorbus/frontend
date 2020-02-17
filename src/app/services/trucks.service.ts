import {Injectable} from '@angular/core';
import {User} from '../models/user';
import {HttpClient} from '@angular/common/http';
import { Truck } from '../models/truck';

@Injectable({
  providedIn: 'root'
})
export class TrucksService {

  public nearbyTrucks: Array<Truck> = [
    {
      name: 'Food Truck',
      image: 'https://images.unsplash.com/photo-1460306855393-0410f61241c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
      rating: '5'
    },
    {
      name: 'Food Truck',
      image: 'https://images.unsplash.com/photo-1460306855393-0410f61241c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
      rating: '5'
    },
    {
      name: 'Food Truck',
      image: 'https://images.unsplash.com/photo-1460306855393-0410f61241c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
      rating: '5'
    },
    {
      name: 'Food Truck',
      image: 'https://images.unsplash.com/photo-1460306855393-0410f61241c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
      rating: '5'
    },
    {
      name: 'Food Truck',
      image: 'https://images.unsplash.com/photo-1460306855393-0410f61241c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
      rating: '5'
    },
    {
      name: 'Food Truck',
      image: 'https://images.unsplash.com/photo-1460306855393-0410f61241c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
      rating: '5'
    },
    {
      name: 'Food Truck',
      image: 'https://images.unsplash.com/photo-1460306855393-0410f61241c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
      rating: '5'
    }
  ];

  constructor(private httpClient: HttpClient) { }

  getAvailableTrucks() {

  }
}
