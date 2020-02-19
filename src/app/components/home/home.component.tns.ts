import {AfterViewInit, Component, OnInit} from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, AfterViewInit {
    title = 'frontend';

    constructor(
        private _routerExtensions: RouterExtensions,
        private _activeRoute: ActivatedRoute) {}

    ngOnInit(): void {
        this._routerExtensions.navigate(['modal-view'], { relativeTo: this._activeRoute });
    }

    ngAfterViewInit(): void {
    }
}
