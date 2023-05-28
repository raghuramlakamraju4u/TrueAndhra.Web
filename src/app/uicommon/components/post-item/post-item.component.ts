import { Component, Input, OnInit } from '@angular/core';

interface PostConfig {
  sImg: string;
  STitle: string;
  sDesc: string;
  sCat: string;
  oDate: Date;

  arrBullets?: string[];

  bIsXsSize?: boolean;
  bIsXlSize?: boolean;

  bInMRCList?: boolean;
  bIsFirstItemInMRCList?: boolean;
}

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.scss']
})
export class PostItemComponent implements OnInit {

  @Input() oPostConfig: PostConfig;

  constructor() { }

  ngOnInit(): void {
  }

}
