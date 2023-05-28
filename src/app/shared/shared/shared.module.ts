import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsDetailsComponent } from './components/news-details/news-details.component';
import { AuthorDetailsComponent } from './components/author-details/author-details.component';
import { SharedRoutingModule } from '../shared-routing.module';



@NgModule({
  declarations: [
    NewsDetailsComponent,
    AuthorDetailsComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [
    NewsDetailsComponent,
    AuthorDetailsComponent
  ]
})
export class SharedModule { }
