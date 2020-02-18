import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ScrollView, ScrollEventData} from 'tns-core-modules/ui/scroll-view';
import {LocationService} from '@src/app/services/location.service';
import {Location} from '@src/app/models/location';
import {TrucksService} from '@src/app/services/trucks.service';
import { registerElement } from 'nativescript-angular/element-registry';
registerElement('StarRating', () => require('nativescript-star-ratings').StarRating);

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, AfterViewInit {
    title = 'frontend';

    constructor(private locationService: LocationService, private trucksService: TrucksService) {
    }

    ngOnInit() {
    }

    ngAfterViewInit() {
    }

    getDollarSign(price: number) {
        switch (price) {
            case 1:
                return '$';
            case 2:
                return '$$';
            case 3:
                return '$$$';

        }
    }
/**TODO
 *might want to use this instead of mobile only plugin;
 */
  getStars(rating: number) {
    switch (rating) {
      case 1:
        return '&#11088';
      case 2:
        return '&#11088; &#11088;';
      case 3:
        return '&#11088; &#11088; &#11088;';
      case 4:
        return '&#11088; &#11088; &#11088; &#11088;';
      case 5:
        return '&#11088; &#11088; &#11088; &#11088; &#11088;';
    }
  }

    onScroll(args: ScrollEventData) {
        const scrollView = args.object as ScrollView;

        console.log('scrollX: ' + args.scrollX);
        console.log('scrollY: ' + args.scrollY);
    }
}
