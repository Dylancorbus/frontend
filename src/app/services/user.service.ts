import {Injectable} from '@angular/core';
import {User} from '../models/user';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    /*TODO uncomment for app*/
    // public user: User = new User();
    public user: User = JSON.parse('{\n' +
        ' "lastName": "Corbus",\n' +
        ' "profilePic": "https://firebasestorage.googleapis.com/v0/b/spotback-3ad6a.appspot.com/o/users%2Fprofile_images%2Fdylancorbus_outlook_com.png?alt=media&token=aad192c4-c0cc-445e-8dde-131e0c449b6e",\n' +
        ' "email": "dylancorbus@outlook.com",\n' +
        ' "firstName": "Dylan",\n' +
        ' "password": null\n' +
        ' }');
    /*TODO false for app*/
    public loggedIn = true;

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
