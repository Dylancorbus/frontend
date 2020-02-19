import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {alert, prompt} from 'tns-core-modules/ui/dialogs';

import {User} from '../../models/user';
import {UserService} from '../../services/user.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    title = 'Mobile Order App';
    isLoggingIn = true;
    user: User;
    @ViewChild('password', null) password: ElementRef;
    @ViewChild('confirmPassword', null) confirmPassword: ElementRef;

    constructor(private userService: UserService, private router: Router) {
        this.user = new User();
    }

    ngOnInit(): void {

    }
    toggleForm() {
        this.isLoggingIn = !this.isLoggingIn;
    }

    submit() {
        if (!this.user.email || !this.user.password) {
            alert('Please provide both an email address and password.');
            return;
        }

        if (this.isLoggingIn) {
            this.login();
        } else {
            this.register();
        }
    }

    login() {
        this.userService.login(this.user).subscribe(data => {
            console.log(data);
            this.userService.user = data;
            this.userService.loggedIn = true;
            this.router.navigate(['/home']);
        }, error => {
            alert(`Unfortunately we could not find your account. ${JSON.stringify(error)}`);
        });
    }

    register() {
        if (this.user.password !== this.user.confirmPassword) {
            alert('Your passwords do not match.');
            return;
        }
        this.userService.register(this.user).subscribe(data => {
            alert('Your account was successfully created.');
            this.isLoggingIn = true;
        }, error => {
            alert(`Unfortunately we were unable to create your account. ${error}`);
        });
    }

    forgotPassword() {
        prompt({
            title: 'Forgot Password',
            message: `Enter the email address you used to register for ${this.title} to reset your password.`,
            inputType: 'email',
            defaultText: '',
            okButtonText: 'Ok',
            cancelButtonText: 'Cancel'
        }).then((data) => {
            if (data.result) {
                this.userService.resetPassword(data.text.trim()).subscribe(res => {
                    alert('Your password was successfully reset. Please check your email for instructions on choosing a new password.');
                    this.isLoggingIn = true;
                }, error => {
                    alert('Unfortunately, an error occurred resetting your password.');
                });
            }
        }, null);
    }

    focusPassword() {
        this.password.nativeElement.focus();
    }

    focusConfirmPassword() {
        if (!this.isLoggingIn) {
            this.confirmPassword.nativeElement.focus();
        }
    }
}

