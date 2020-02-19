import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export abstract class LocationService {

    location;

    abstract getLocation();


}
