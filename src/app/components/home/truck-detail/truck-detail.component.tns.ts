import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ModalDialogOptions, ModalDialogParams, ModalDialogService} from 'nativescript-angular/modal-dialog';
import {Page} from 'tns-core-modules/ui/page';
import {Truck} from '@src/app/models/truck';
import {TrucksService} from '@src/app/services/trucks.service';
import {RouterExtensions} from 'nativescript-angular/router';
import {ScrollEventData, ScrollView} from 'tns-core-modules/ui/scroll-view';
import {Image} from 'tns-core-modules/ui/image';
import {Button} from 'tns-core-modules/ui/button';
import {Label} from 'tns-core-modules/ui/label';
import {HomeComponent} from '@src/app/components/home/home.component';


@Component({
    selector: 'app-details',
    templateUrl: './truck-detail.component.html',
    providers: [ModalDialogService],
    styleUrls: ['./truck-detail.component.scss']
})
export class TruckDetailComponent implements OnInit {
    truck: Truck;

    constructor(
        private trucksService: TrucksService,
        private route: ActivatedRoute,
        private router: Router,
        private routerExtensions: RouterExtensions,
        private _vcRef: ViewContainerRef,
        private params: ModalDialogParams,
        private _modalService: ModalDialogService,
        private page: Page
    ) {
    }

    ngOnInit(): void {
        console.log(this.params.context.id);
        const id = this.params.context.id;
        this.truck = this.trucksService.getTruck(id);
        const blackBar = this.page.getViewById('black-bar') as Label;
        blackBar.opacity = 0;
        const abTitle = this.page.getViewById('abTitle') as Label;
        abTitle.opacity = 0;
        const btnBack = this.page.getViewById('btn-back') as Label;
        btnBack.opacity = 1;
    }

    onClose(): void {
        this.params.closeCallback('return value');
    }

    onScroll(args: ScrollEventData) {
        const sv = args.object as ScrollView;

        const image = this.page.getViewById('truck-img') as Image;
        const btnBack = this.page.getViewById('btn-back') as Button;
        const blackBar = this.page.getViewById('black-bar') as Label;
        const abTitle = this.page.getViewById('abTitle') as Label;

        console.log(args.scrollY);
        if (args.scrollY < 0) {
            const scrollAmt = Math.abs(args.scrollY);
            const scale = (scrollAmt + 200) / 200;

            image.scaleX = scale;
            image.scaleY = scale;

            image.translateY = scrollAmt / 2;

            btnBack.translateY = scrollAmt;
            blackBar.translateY = scrollAmt;
        } else {
            image.translateY = -1 * args.scrollY;

            if (args.scrollY < 200) {
                btnBack.translateY = args.scrollY * -1;
                blackBar.translateY = args.scrollY * -1;
                if (args.scrollY > 100) {
                    const opacity = this.scaleFormula(args.scrollY, 100, 280, 0, 1);
                    const abTitleOpacity = this.scaleFormula(args.scrollY, 180, 200, 0, 1);
                    const btnBackOpacity = this.scaleFormula(args.scrollY, 100, 280, 1, 0);
                    blackBar.opacity = opacity;
                    abTitle.opacity = abTitleOpacity;
                    btnBack.opacity = btnBackOpacity;
                }
            } else {
                btnBack.translateY = -200;
                blackBar.translateY = -200;
                blackBar.opacity = 1;
                abTitle.opacity = 1;
                btnBack.opacity = 0;
            }
        }
    }

    scaleFormula(current: number, totalMin: number, totalMax: number, scaledMin: number, scaledMax: number):
        number {
        return (scaledMax - scaledMin) * (current - totalMin) / (totalMax - totalMin) + scaledMin;
    }

    onTap(id: number, category: string): void {
        const options: ModalDialogOptions = {
            viewContainerRef: this._vcRef,
            context: {
                'id': id,
                'category': category
            },
            fullscreen: true
        };

        this._modalService.showModal(HomeComponent, options)
            .then((result: string) => {
                console.log(result);
            });
        // this.router.navigate(['/item'], { relativeTo: this.route });
    }
}
