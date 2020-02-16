import { Component, OnInit } from '@angular/core';
import { ScrollView, ScrollEventData } from 'tns-core-modules/ui/scroll-view';
import {LocationService} from '@src/app/services/location.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  title = 'frontend';
  public coordinates: string;

  constructor(private location: LocationService) { }

  ngOnInit() {
    this.location.getLocation().then(function (location) {
      console.log(location);
      this.coordinates = location.latitude + '' + location.longitude;
    }, function (e) {
      console.log('Error: ' + e.message);
    });
  }

  onScroll(args: ScrollEventData) {
    const scrollView = args.object as ScrollView;

    console.log('scrollX: ' + args.scrollX);
    console.log('scrollY: ' + args.scrollY);
  }
}
