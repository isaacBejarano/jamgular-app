import { Component, OnInit } from '@angular/core';

import { SlugOperatorService } from '@app/utils/slug-operator.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  // data
  menu: { [i: string]: any } = {
    home: {
      name: 'inicio',
      children: [],
    },
    idioms: {
      name: 'refranes',
      children: [
        ['/vulgares', ''],
        ['/de-temporada', ''],
        ['/populares', ''],
      ],
    },
  };

  // render links
  home = this.menu.home.name;
  idioms = this.menu.idioms;

  constructor(private slugOp: SlugOperatorService) {}

  ngOnInit(): void {
    // MENU
    this.idioms.children.forEach((idiom: string, i: number) => {
      this.slugOp.setSlug = idiom[0];

      // order matters!
      this.idioms.children[i][0] = this.slugOp.unslash().getSlug;
      this.idioms.children[i][1] = this.slugOp.undash().getSlug;
    });
  }
}
