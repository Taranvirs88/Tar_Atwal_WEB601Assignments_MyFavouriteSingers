import { Component } from '@angular/core';
import { ContentList } from '../helper-files/content-list';
@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent {
  contentList: ContentList;

  constructor() {
    this.contentList = new ContentList();

    const content1 = {
      id: 1,
      title: 'Tera Tera',
      description: 'Tarsem Jassar has written and sung the song Tera Tera that emphasizes how we humans like to claim rights to everything we come across in the world; while none of it belongs to us. The Almighty created everything we see and feel. He owns all of it. There is nothing that ‘one’ can take away from this world. We come empty-handed in this world, and we’re leaving here with nothing.',
      creator: 'Tarsem Jassar',
      imgURL: 'assets/img/img1.jpg',
      type: 'Motivational Song ',
      tags: ['2019']
    };

    const content2 = {
      id: 2,
      title: 'Leekan',
      description: 'Leekan Song from the Ashke album is voiced by famous singer Amrinder Gill. The lyrics of Leekan Song from Ashke album are written by Raj Ranjodh',
      creator: 'Amrinder Gill',
      imgURL: 'assets/img/img2.jpg',
      type: 'Romantic',
      tags: ['2018']
    };

    const content3 = {
      id: 3,
      title: 'Rutba',
      description: 'Rutba Lyrics by Satinder Sartaaj is brand new Punjabi song from movie Kali Jotta and this latest song is featuring Neeru Bajwa, Wamiqa Gabbi.',
      creator: 'Satinder Sartaj ',
      imgURL: 'assets/img/Img3.jpg',
      type: 'Soofy Music',
      tags: ['2023']
    };

    this.contentList.addContent(content1);
    this.contentList.addContent(content2);
    this.contentList.addContent(content3);

  }
}