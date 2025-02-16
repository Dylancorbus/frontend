import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, AfterViewInit {
    title = 'frontend';

    constructor(
        private router: Router,
        private _activeRoute: ActivatedRoute) {}

    ngOnInit(): void {
        this.router.navigate(['modal-view'], { relativeTo: this._activeRoute });
    }

    ngAfterViewInit(): void {
    }
}
