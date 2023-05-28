import { NgModule } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { HeaderComponent } from './components/header/header.component';
import { PremAdsComponent } from './components/prem-ads/prem-ads.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { HomeComponent } from './components/home/home.component';
import { MainRowAComponent } from './components/main-row-a/main-row-a.component';
import { MainRowBComponent } from './components/main-row-b/main-row-b.component';
import { MainRowCComponent } from './components/main-row-c/main-row-c.component';
import { FormsModule } from '@angular/forms';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './components/navbar/navbar.component';


@NgModule({
  declarations: [
    TopBarComponent,
    HeaderComponent,
    PremAdsComponent,
    FooterComponent,
    MainComponent,
    HomeComponent,
    NavbarComponent,
    MainRowAComponent,
    MainRowBComponent,
    MainRowCComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,

    FormsModule,
    NgbCarouselModule,
    NgFor
  ],
  exports: [
    TopBarComponent,
    HeaderComponent,
    PremAdsComponent,
    NavbarComponent,
    FooterComponent,
    MainComponent,
    HomeComponent
  ]
})
export class HomeModule { }
