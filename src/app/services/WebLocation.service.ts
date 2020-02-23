import {Location} from '@src/app/models/location';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WebLocationService {

  public location: Location;

  constructor() {
  }

  public getLocation() {}
}
