import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-row-c',
  templateUrl: './main-row-c.component.html',
  styleUrls: ['./main-row-c.component.scss']
})
export class MainRowCComponent implements OnInit {


  public oFirstColumn={
    sTitle: 'LifeStyle',
    arrPosts: [
      {
        sImg: 'https://quanticalabs.com/wp_themes/pressroom/files/2015/01/image_031-510x374.jpg',
        STitle: 'North Sea oil industry faces dire future',
        sDesc: 'Maecenas mauris elementum, est morbi interdum cursus at elite imperdiet libero. Proin odios dapibus integer an nulla augue pharetra cursus.',
        sCat: 'LIFESTYLE',
        oDate: new Date(),
        nImgSize: 3,
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
        sCat: 'LIFESTYLE',
        oDate: new Date(),
        nImgSize: 0,
        bAlignHorizontal: true,
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

  public oSecondColumn={
    sTitle: 'Health',
    arrPosts: [
      {
        sImg: 'https://quanticalabs.com/wp_themes/pressroom/files/2015/01/image_11-330x242.jpg',
        STitle: 'North Sea oil industry faces dire future',
        sDesc: 'Maecenas mauris elementum, est morbi interdum cursus at elite imperdiet libero. Proin odios dapibus integer an nulla augue pharetra cursus.',
        sCat: 'LIFESTYLE',
        oDate: new Date(),
        nImgSize: 3,
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
        sImg: 'https://quanticalabs.com/wp_themes/pressroom/files/2015/01/image_13-100x100.jpg',
        STitle: 'North Sea oil industry faces dire future',
        sDesc: 'Maecenas mauris elementum, est morbi interdum cursus at elite imperdiet libero. Proin odios dapibus integer an nulla augue pharetra cursus.',
        sCat: 'LIFESTYLE',
        oDate: new Date(),
        nImgSize: 0,
        bAlignHorizontal: true,
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

  public oThirdColumn={
    sTitle: 'Science',
    arrPosts: [
      {
        sImg: 'https://quanticalabs.com/wp_themes/pressroom/files/2015/01/image_04-510x374.jpg',
        STitle: 'North Sea oil industry faces dire future',
        sDesc: 'Maecenas mauris elementum, est morbi interdum cursus at elite imperdiet libero. Proin odios dapibus integer an nulla augue pharetra cursus.',
        sCat: 'LIFESTYLE',
        oDate: new Date(),
        nImgSize: 3,
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
        sImg: 'https://quanticalabs.com/wp_themes/pressroom/files/2015/01/image_02-100x100.jpg',
        STitle: 'North Sea oil industry faces dire future',
        sDesc: 'Maecenas mauris elementum, est morbi interdum cursus at elite imperdiet libero. Proin odios dapibus integer an nulla augue pharetra cursus.',
        sCat: 'LIFESTYLE',
        oDate: new Date(),
        nImgSize: 0,
        bAlignHorizontal: true,
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
  constructor() { }

  ngOnInit(): void {
  }

}
