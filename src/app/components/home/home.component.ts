import {AfterViewInit, Component, OnInit} from '@angular/core';
import { ScrollView, ScrollEventData } from 'tns-core-modules/ui/scroll-view';
import {LocationService} from '@src/app/services/location.service';
import {Location} from '@src/app/models/location';
import {TrucksService} from '@src/app/services/trucks.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, AfterViewInit {
  title = 'frontend';

  constructor(private locationService: LocationService, private trucksService: TrucksService) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
  }

  onScroll(args: ScrollEventData) {
    const scrollView = args.object as ScrollView;

    console.log('scrollX: ' + args.scrollX);
    console.log('scrollY: ' + args.scrollY);
  }
}
