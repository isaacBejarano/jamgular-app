import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  footer = {
    copy: 'Copyright © 2021-2022 Isaac Bejarano',
    made: [
      ['Angular', './assets/icons/angular.png', 'https://angular.io'],
      ['Scully', './assets/icons/scully.png', 'https://scully.io/'],
    ],
    powered: [
      'Netlify',
      './assets/icons/netlify.png',
      'https://www.netlify.com',
    ],
    badge:
      'https://api.netlify.com/api/v1/badges/425f70ba-312a-4bbc-8ffd-387ad037e00a/deploy-status',
  };
}
