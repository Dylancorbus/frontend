import {AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';
import {RadSideDrawerComponent} from 'nativescript-ui-sidedrawer/angular';
import { ActionBar } from '@nativescript/core/ui/action-bar/action-bar';
import {UserService} from '@src/app/services/user.service';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit, AfterViewInit {
    private _mainContentText: string;
    public title = 'frontend';

    constructor(private _changeDetectionRef: ChangeDetectorRef, private auth: UserService) {
    }

    @ViewChild(RadSideDrawerComponent, {static: true}) public drawerComponent: RadSideDrawerComponent;
    private drawer: RadSideDrawer;

    ngAfterViewInit() {
        this.drawer = this.drawerComponent.sideDrawer;
        this._changeDetectionRef.detectChanges();
    }

    ngOnInit() {
        this.mainContentText = 'SideDrawer for NativeScript can be easily' +
            ' setup in the HTML definition of your page by defining tkDrawerContent ' +
            'and tkMainContent. The component has a default transition and position and also exposes ' +
            'notifications related to changes in its state. Swipe from left to open side drawer.';
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
}
