import {AfterViewInit, ChangeDetectorRef, Component, NgModule, OnInit} from '@angular/core';
import {UserService} from '@src/app/services/user.service';
import {WebLocationService} from '@src/app/services/WebLocation.service';
const firebase = null;

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit, AfterViewInit {
    private _mainContentText: string;
    public title = 'Mobile Order App';

    constructor(private _changeDetectionRef: ChangeDetectorRef, private auth: UserService, private location: WebLocationService) {
    }

    ngAfterViewInit() {
    }

    ngOnInit() {
        this.location.getLocation();
        // firebase.init({}).then(
        //     () => {
        //         console.log('firebase.init done');
        //     },
        //     error => {
        //         console.log(`firebase.init error: ${error}`);
        //     }
        // );
    }
}
