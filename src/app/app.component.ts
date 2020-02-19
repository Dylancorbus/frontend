import {AfterViewInit, ChangeDetectorRef, Component, NgModule, OnInit} from '@angular/core';
import {UserService} from '@src/app/services/user.service';
import {LocationService} from '@src/app/services/location.service';
import {Location} from '@src/app/models/location';
import {LocationImlService} from '@src/app/services/locationIml.service';
const firebase = null;

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

    ngAfterViewInit() {
    }

    ngOnInit() {
        this.location.getLocation().then((location: Location) => {
            console.log(location);
            // console.log(this.location.location + 'halasd;lfkj');
            // this.location.location = location;
        }, function (e) {
            console.log('Error: ' + e.message);
        });
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
