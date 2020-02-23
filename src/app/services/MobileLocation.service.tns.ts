import {Location} from '@src/app/models/location';
import * as geolocation from 'nativescript-geolocation';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MobileLocationService {

  public location: Location;

  constructor() {
    if (!geolocation.isEnabled()) {
      geolocation.enableLocationRequest().then(() => {
        console.error('Allow geolocation');
      }, function (error) {
        console.error('Deny : ' + error);
      });
    }
  }

  public getLocation() {
    return geolocation.getCurrentLocation({
      desiredAccuracy: 1,
      updateDistance: 10,
      minimumUpdateTime: 600000,
      maximumAge: 600000,
      timeout: 5000
    });
  }
}
