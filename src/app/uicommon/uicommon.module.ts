import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostItemComponent } from './components/post-item/post-item.component';
import { AuthorItemComponent } from './components/author-item/author-item.component';



@NgModule({
  declarations: [
    PostItemComponent,
    AuthorItemComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UicommonModule { }
