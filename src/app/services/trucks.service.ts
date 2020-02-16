import {Injectable} from '@angular/core';
import {User} from '../models/user';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TrucksService {

  constructor(private httpClient: HttpClient) { }

  getAvailableTrucks() {

  }
}
