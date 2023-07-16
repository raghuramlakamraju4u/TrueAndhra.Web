import { Component, Input, OnInit } from '@angular/core';
import { PostConfig } from 'src/app/uicommon/models/post-config';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.scss']
})
export class NewsDetailsComponent implements OnInit {

  constructor() { }

  @Input() oPost: any = {
    strId: '123',
    strTitle : 'Three reasons to cheer europe’s economy',
    strCategory: 'WORLD',
    strDateTime: 'Feb 25, 2015',
    strAuthor: 'Anna Shubina',
    arrHighlights: [],
    strImage: '',
    nViews: 84,
    nComments: 14
  };

  @Input() oPostDetails: any = {
    strId: '123',
    arrComments: [],
    oContent: {
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra. Urna id volutpat lacus laoreet non curabitur gravida arcu ac. Magna fermentum iaculis eu non diam phasellus vestibulum lorem sed. Tellus mauris a diam maecenas sed. Laoreet id donec ultrices tincidunt. Amet dictum sit amet justo donec enim. Est lorem ipsum dolor sit amet consectetur adipiscing elit pellentesque. Sit amet porttitor eget dolor. Tincidunt augue interdum velit euismod in pellentesque massa placerat duis. Consectetur adipiscing elit pellentesque habitant morbi tristique senectus et netus. Habitant morbi tristique senectus et netus et malesuada fames ac. Neque egestas congue quisque egestas diam. Tincidunt eget nullam non nisi est sit amet facilisis. Nulla facilisi cras fermentum odio eu feugiat pretium nibh ipsum. Cras pulvinar mattis nunc sed. Sit amet nisl suscipit adipiscing bibendum. Pellentesque sit amet porttitor eget dolor morbi non.      Pretium fusce id velit ut tortor pretium viverra suspendisse potenti. Sem fringilla ut morbi tincidunt augue. Odio morbi quis commodo odio aenean sed adipiscing. Sem viverra aliquet eget sit amet tellus. Eleifend mi in nulla posuere sollicitudin. Vitae auctor eu augue ut lectus arcu bibendum. Elit pellentesque habitant morbi tristique senectus et netus. Sodales ut eu sem integer. Dapibus ultrices in iaculis nunc sed augue. Commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae. Convallis tellus id interdum velit laoreet id donec ultrices tincidunt. Nisl rhoncus mattis rhoncus urna neque viverra justo. Fermentum dui faucibus in ornare quam viverra orci sagittis. Laoreet id donec ultrices tincidunt arcu. Maecenas accumsan lacus vel facilisis. Volutpat ac tincidunt vitae semper quis lectus nulla at volutpat. Sit amet justo donec enim diam vulputate ut pharetra sit. Tellus molestie nunc non blandit massa. Mattis enim ut tellus elementum sagittis vitae et leo. Aliquet eget sit amet tellus cras. Venenatis cras sed felis eget velit aliquet sagittis id consectetur. Iaculis nunc sed augue lacus viverra vitae. Nulla facilisi etiam dignissim diam quis enim lobortis scelerisque. Donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu. Nunc sed velit dignissim sodales ut eu. Erat nam at lectus urna duis. Vitae justo eget magna fermentum iaculis eu non. Donec et odio pellentesque diam volutpat commodo sed egestas. In massa tempor nec feugiat nisl pretium fusce id velit. Semper feugiat nibh sed pulvinar proin gravida hendrerit. Id ornare arcu odio ut.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra. Urna id volutpat lacus laoreet non curabitur gravida arcu ac. Magna fermentum iaculis eu non diam phasellus vestibulum lorem sed. Tellus mauris a diam maecenas sed. Laoreet id donec ultrices tincidunt. Amet dictum sit amet justo donec enim. Est lorem ipsum dolor sit amet consectetur adipiscing elit pellentesque. Sit amet porttitor eget dolor. Tincidunt augue interdum velit euismod in pellentesque massa placerat duis. Consectetur adipiscing elit pellentesque habitant morbi tristique senectus et netus. Habitant morbi tristique senectus et netus et malesuada fames ac. Neque egestas congue quisque egestas diam. Tincidunt eget nullam non nisi est sit amet facilisis. Nulla facilisi cras fermentum odio eu feugiat pretium nibh ipsum. Cras pulvinar mattis nunc sed. Sit amet nisl suscipit adipiscing bibendum. Pellentesque sit amet porttitor eget dolor morbi non.      Pretium fusce id velit ut tortor pretium viverra suspendisse potenti. Sem fringilla ut morbi tincidunt augue. Odio morbi quis commodo odio aenean sed adipiscing. Sem viverra aliquet eget sit amet tellus. Eleifend mi in nulla posuere sollicitudin. Vitae auctor eu augue ut lectus arcu bibendum. Elit pellentesque habitant morbi tristique senectus et netus. Sodales ut eu sem integer. Dapibus ultrices in iaculis nunc sed augue. Commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae. Convallis tellus id interdum velit laoreet id donec ultrices tincidunt. Nisl rhoncus mattis rhoncus urna neque viverra justo. Fermentum dui faucibus in ornare quam viverra orci sagittis. Laoreet id donec ultrices tincidunt arcu. Maecenas accumsan lacus vel facilisis. Volutpat ac tincidunt vitae semper quis lectus nulla at volutpat. Sit amet justo donec enim diam vulputate ut pharetra sit. Tellus molestie nunc non blandit massa. Mattis enim ut tellus elementum sagittis vitae et leo. Aliquet eget sit amet tellus cras. Venenatis cras sed felis eget velit aliquet sagittis id consectetur. Iaculis nunc sed augue lacus viverra vitae. Nulla facilisi etiam dignissim diam quis enim lobortis scelerisque. Donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu. Nunc sed velit dignissim sodales ut eu. Erat nam at lectus urna duis. Vitae justo eget magna fermentum iaculis eu non. Donec et odio pellentesque diam volutpat commodo sed egestas. In massa tempor nec feugiat nisl pretium fusce id velit. Semper feugiat nibh sed pulvinar proin gravida hendrerit. Id ornare arcu odio ut.'
    },
    oQuote: '',
    arrMedia: [
      {type: 0, src: './../../../../assets/images/temp/temp_post_image.jpg', 
        oLabel: {text: 'Britons are never more comfortable than when talking about the weather.', src: 'John Smith, Flickr'}}
    ]
  }

  ngOnInit(): void {

  }

}
