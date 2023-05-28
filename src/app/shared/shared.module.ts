import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';
import { NewsDetailsComponent } from './components/news-details/news-details.component';
import { AuthorDetailsComponent } from './components/author-details/author-details.component';
import { UicommonModule } from '../uicommon/uicommon.module';



@NgModule({
  declarations: [
    NewsDetailsComponent,
    AuthorDetailsComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,

    UicommonModule
  ],
  exports: [
    NewsDetailsComponent,
    AuthorDetailsComponent
  ]
})
export class SharedModule { }
