import { Component, OnInit } from '@angular/core';
import { PostConfig } from 'src/app/uicommon/models/post-config';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.scss']
})
export class NewsDetailsComponent implements OnInit {

  constructor() { }

  public oFakePostItem_Small: PostConfig = {
    sImg: 'https://quanticalabs.com/wp_themes/pressroom/files/2015/01/image_031-510x374.jpg',
    STitle: 'North Sea oil industry faces dire future',
    sDesc: 'Maecenas mauris elementum, est morbi interdum cursus at elite imperdiet libero. Proin odios dapibus integer an nulla augue pharetra cursus.',
    sCat: 'HEALTH',
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
  };

  public oFakePostItem_Medium: PostConfig = {
    sImg: 'https://quanticalabs.com/wp_themes/pressroom/files/2015/01/image_031-510x374.jpg',
    STitle: 'North Sea oil industry faces dire future',
    sDesc: 'Maecenas mauris elementum, est morbi interdum cursus at elite imperdiet libero. Proin odios dapibus integer an nulla augue pharetra cursus.',
    sCat: 'HEALTH',
    oDate: new Date(),
    nImgSize: 1,
    bShowBullets: false,
    arrBullets: [
      'Free episodes and new movies on iTunes',
      'Getting started with mobile games',
      'The world’s tiniest drone put to the test',
      'Our favorites from the Geneva Motor Show'
    ]
  };

  public oFakePostItem_Streched: PostConfig = {
    sImg: 'https://quanticalabs.com/wp_themes/pressroom/files/2015/01/image_031-510x374.jpg',
    STitle: 'North Sea oil industry faces dire future',
    sDesc: 'Maecenas mauris elementum, est morbi interdum cursus at elite imperdiet libero. Proin odios dapibus integer an nulla augue pharetra cursus.',
    sCat: 'HEALTH',
    oDate: new Date(),
    nImgSize: 2,
    bShowBullets: false,
    arrBullets: [
      'Free episodes and new movies on iTunes',
      'Getting started with mobile games',
      'The world’s tiniest drone put to the test',
      'Our favorites from the Geneva Motor Show'
    ]
  };


  public oFakePostItem_Large: PostConfig = {
    sImg: 'https://quanticalabs.com/wp_themes/pressroom/files/2015/01/image_031-510x374.jpg',
    STitle: 'North Sea oil industry faces dire future',
    sDesc: 'Maecenas mauris elementum, est morbi interdum cursus at elite imperdiet libero. Proin odios dapibus integer an nulla augue pharetra cursus.',
    sCat: 'HEALTH',
    oDate: new Date(),
    nImgSize: 3,
    bShowBullets: true,
    arrBullets: [
      'Free episodes and new movies on iTunes',
      'Getting started with mobile games',
      'The world’s tiniest drone put to the test',
      'Our favorites from the Geneva Motor Show'
    ]
  };

  ngOnInit(): void {
  }

}
