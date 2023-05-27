import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public arrNavbar = [
    {
      name: "Home" ,
      route: '/home',
      submenu: [
        {
          name: 'home1',
          route: '/home1'
        },
        {
          name: 'home2',
          route: '/home2'
        }

      ]
    },
    {
      name: "Pages" ,
      route: '/Pages',
      submenu: [
        {
          name: 'Page1',
          route: '/Page1'
        },
        {
          name: 'Page2',
          route: '/page2'
        }

      ]
    },
    {
      name: "Mega menu" ,
      route: '/megamenu',
      submenu: [
        {
          name: 'Mega1',
          route: '/mega1'
        },
        {
          name: 'Mega2',
          route: '/mega2'
        }

      ]
    },
    {
      name: "Authors" ,
      route: '/authors',
      submenu: [
        {
          name: 'Author1',
          route: '/author1'
        },
        {
          name: 'Author2',
          route: '/author2'
        }

      ]
    },
    {
      name: "Categories" ,
      route: '/categories',
      submenu: [
        {
          name: 'Category1',
          route: '/category1'
        },
        {
          name: 'Category2',
          route: '/category2'
        }

      ]
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
