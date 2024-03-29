import { Component, OnInit } from '@angular/core';
import { CommonService } from '@app/services/common.service';
import { enviroment } from '@environments/environment';
import { ISocialNetwork } from '../../interfaces';

@Component({
  selector: 'tt-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent implements OnInit {
  env = enviroment;
  socialNetworks: ISocialNetwork[] = [
    {
      name: 'facebook-logo',
      type: 'svg',
      href: 'https://www.facebook.com/trinh.thanhtung.967',
      action: 'url',
    },
    {
      name: 'instagram-logo',
      type: 'svg',
      href: 'https://www.instagram.com/trinhthanhtung1010/',
      action: 'url',
    },
    {
      name: 'linkedin-logo',
      type: 'svg',
      href: 'https://www.linkedin.com/in/tung-trinh-frontend',
      action: 'url',
    },
    {
      name: 'skype-logo',
      type: 'svg',
      action: 'copy',
      content: 'live:trinhthanhtung1010'
    },
    {
      name: 'github-logo',
      type: 'svg',
      href: 'https://www.github.com/thanhtung1010',
      action: 'url',
    },
  ];

  constructor(private commonSer: CommonService) { }

  ngOnInit() {
  }

  copyContent(content: any) {
    this.commonSer.copyToClipboard(content);
  }

}
