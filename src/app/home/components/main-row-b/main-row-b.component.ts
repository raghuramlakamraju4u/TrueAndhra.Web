import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-main-row-b',
  templateUrl: './main-row-b.component.html',
  styleUrls: ['./main-row-b.component.scss']
})
export class MainRowBComponent implements OnInit {


  public oRecentPosts={
    sTitle: 'Recent Posts',
    arrPosts: [
      {
        sImg: 'https://quanticalabs.com/wp_themes/pressroom/files/2015/01/image_031-510x374.jpg',
        STitle: 'North Sea oil industry faces dire future',
        sDesc: 'Maecenas mauris elementum, est morbi interdum cursus at elite imperdiet libero. Proin odios dapibus integer an nulla augue pharetra cursus.',
        sCat: 'LIFESTYLE',
        oDate: new Date(),
        nImgSize: 1,
        bAlignHorizontal: false,
        bShowBullets: false,
        arrBullets: [
          'Free episodes and new movies on iTunes',
          'Getting started with mobile games',
          'The world’s tiniest drone put to the test',
          'Our favorites from the Geneva Motor Show'
        ]
      },
      {
        sImg: 'https://quanticalabs.com/wp_themes/pressroom/files/2015/01/image_06-100x100.jpg',
        STitle: 'North Sea oil industry faces dire future',
        sDesc: 'Maecenas mauris elementum, est morbi interdum cursus at elite imperdiet libero. Proin odios dapibus integer an nulla augue pharetra cursus.',
        sCat: 'HEALTH',
        oDate: new Date(),
        nImgSize: 1,
        bAlignHorizontal: false,
        bShowBullets: false,
        arrBullets: [
          'Free episodes and new movies on iTunes',
          'Getting started with mobile games',
          'The world’s tiniest drone put to the test',
          'Our favorites from the Geneva Motor Show'
        ]
      },
      {
        sImg: 'https://quanticalabs.com/wp_themes/pressroom/files/2015/01/image_01-510x374.jpg',
        STitle: 'North Sea oil industry faces dire future',
        sDesc: 'Maecenas mauris elementum, est morbi interdum cursus at elite imperdiet libero. Proin odios dapibus integer an nulla augue pharetra cursus.',
        sCat: 'HEALTH',
        oDate: new Date(),
        nImgSize: 1,
        bAlignHorizontal: false,
        bShowBullets: false,
        arrBullets: [
          'Free episodes and new movies on iTunes',
          'Getting started with mobile games',
          'The world’s tiniest drone put to the test',
          'Our favorites from the Geneva Motor Show'
        ]
      },
      {
        sImg: 'https://quanticalabs.com/wp_themes/pressroom/files/2015/01/image_06-100x100.jpg',
        STitle: 'North Sea oil industry faces dire future',
        sDesc: 'Maecenas mauris elementum, est morbi interdum cursus at elite imperdiet libero. Proin odios dapibus integer an nulla augue pharetra cursus.',
        sCat: 'HEALTH',
        oDate: new Date(),
        nImgSize: 1,
        bAlignHorizontal: false,
        bShowBullets: false,
        arrBullets: [
          'Free episodes and new movies on iTunes',
          'Getting started with mobile games',
          'The world’s tiniest drone put to the test',
          'Our favorites from the Geneva Motor Show'
        ]
      }
      ,
      {
        sImg: 'https://quanticalabs.com/wp_themes/pressroom/files/2015/01/image_01-510x374.jpg',
        STitle: 'North Sea oil industry faces dire future',
        sDesc: 'Maecenas mauris elementum, est morbi interdum cursus at elite imperdiet libero. Proin odios dapibus integer an nulla augue pharetra cursus.',
        sCat: 'HEALTH',
        oDate: new Date(),
        nImgSize: 1,
        bAlignHorizontal: false,
        bShowBullets: false,
        arrBullets: [
          'Free episodes and new movies on iTunes',
          'Getting started with mobile games',
          'The world’s tiniest drone put to the test',
          'Our favorites from the Geneva Motor Show'
        ]
      }
    ]
  }


  paused = false;
	unpauseOnArrow = false;
	pauseOnIndicator = false;

	@ViewChild('carousel', { static: true }) carousel: NgbCarousel;
  
  constructor(private oRouter: Router) { }

  ngOnInit(): void {
  }

  togglePaused() {
		if (this.paused) {
			this.carousel.cycle();
		} else {
			this.carousel.pause();
		}
		this.paused = !this.paused;
	}

  onSlide(slideEvent: NgbSlideEvent) {
		if (
			this.unpauseOnArrow &&
			slideEvent.paused &&
			(slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)
		) {
			this.togglePaused();
		}
		if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
			this.togglePaused();
		}
	}

	public fnCarouselItemClick(): void {
		this.oRouter.navigate(['', 1]);
	}

}
