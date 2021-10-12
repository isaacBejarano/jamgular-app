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
      [
        'Angular',
        './assets/icons/angular_sm_@2x.png',
        'https://angular.io',
        'logo de angular',
      ],
      [
        'Scully',
        './assets/icons/scully_sm_@2x.png',
        'https://scully.io/',
        'logo de scully',
      ],
    ],
    powered: [
      'Netlify',
      './assets/icons/netlify_sm_@2x.png',
      'https://www.netlify.com',
      'logo de netlify',
    ],
    badge: [
      'https://api.netlify.com/api/v1/badges/425f70ba-312a-4bbc-8ffd-387ad037e00a/deploy-status',
      'deploy status on netlify cdn',
    ],
  };
}
