import {Injectable} from '@angular/core';
import * as geolocation from 'nativescript-geolocation';
import {Accuracy} from 'tns-core-modules/ui/enums';

@Injectable({
    providedIn: 'root'
})
export class LocationService {

    public lat = 0;
    public lng = 0;

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
