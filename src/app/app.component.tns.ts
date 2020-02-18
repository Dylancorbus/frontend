import {AfterViewInit, ChangeDetectorRef, Component, NgModule, OnInit, ViewChild} from '@angular/core';
import {RadSideDrawer} from 'nativescript-ui-sidedrawer';
import {RadSideDrawerComponent} from 'nativescript-ui-sidedrawer/angular';
import {UserService} from '@src/app/services/user.service';
import {LocationService} from '@src/app/services/location.service';
import {Location} from '@src/app/models/location';
import {LocationImlService} from '@src/app/services/locationIml.service.tns';

const firebase = require('nativescript-plugin-firebase');

@NgModule({
    providers: [
        {
            provide: LocationService,
            useClass: LocationImlService,
        }
    ]
})

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit, AfterViewInit {
    private _mainContentText: string;
    public title = 'Mobile Order App';

    constructor(private _changeDetectionRef: ChangeDetectorRef, private auth: UserService, private location: LocationService) {
    }

    @ViewChild(RadSideDrawerComponent, {static: true}) public drawerComponent: RadSideDrawerComponent;
    private drawer: RadSideDrawer;

    ngAfterViewInit() {
        this.drawer = this.drawerComponent.sideDrawer;
        this._changeDetectionRef.detectChanges();
    }

    ngOnInit() {
        this.location.getLocation().then((location: Location) => {
            console.log(location);
            // console.log(this.location.location + 'halasd;lfkj');
            // this.location.location = location;
        }, function (e) {
            console.log('Error: ' + e.message);
        });
        firebase.init({}).then(
            () => {
                console.log('firebase.init done');
            },
            error => {
                console.log(`firebase.init error: ${error}`);
            }
        );
    }

    get mainContentText() {
        return this._mainContentText;
    }

    set mainContentText(value: string) {
        this._mainContentText = value;
    }

    public openDrawer() {
        this.drawer.showDrawer();
    }

    public onCloseDrawerTap() {
        this.drawer.closeDrawer();
    }

    public signOut() {
        this.auth.loggedIn = false;
        this.onCloseDrawerTap();
    }
}
