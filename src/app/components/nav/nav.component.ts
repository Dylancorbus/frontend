import {Component, OnInit, ViewChild, ElementRef, HostListener, AfterViewInit} from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit, AfterViewInit {
  @ViewChild('stickyMenu', null) menuElement: ElementRef;

  sticky: boolean = false;
  elementPosition: any;

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.elementPosition = this.menuElement.nativeElement.offsetTop;
  }

  @HostListener('window:scroll')
  handleScroll(){
    const windowScroll = window.pageYOffset;
    if(windowScroll >= this.elementPosition){
      this.sticky = true;
    } else {
      this.sticky = false;
    }
  }

  scrollToElement(id: string): void {
    console.log(id);
    document.querySelector(id).scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

}
