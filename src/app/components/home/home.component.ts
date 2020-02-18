import {AfterViewInit, Component, OnInit} from '@angular/core';
import {TrucksService} from '@src/app/services/trucks.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, AfterViewInit {
    title = 'frontend';

    constructor() {
    }

    ngAfterViewInit(): void {
    }

    ngOnInit(): void {
    }
}
