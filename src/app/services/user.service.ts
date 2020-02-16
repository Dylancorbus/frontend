import {Injectable} from '@angular/core';
import {User} from '../models/user';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public user: User = new User();
  public loggedIn = false;
  constructor(private httpClient: HttpClient) {
  }

  register(user: User) {
    return this.httpClient.post('http://www.somewebsite.com/createAccount', user);
  }

  login(user: User) {
    return this.httpClient.post<User>('https://www.spotbackapp.com/users.dev/readAccount', user);
  }

  resetPassword(email) {
    return this.httpClient.post('http://www.somewebsite.com/createAccount', email);
  }

}
