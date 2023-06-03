import { Component } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent {
    contentList:Content[] =[
      {
        id: 1,
        title: 'Tera Tera',
        imgURL: 'assets/img/img1.jpg',
        description: 'Tarsem Jassar has written and sung the song Tera Tera that emphasizes how we humans like to claim rights to everything we come across in the world; while none of it belongs to us.',
        creator: 'Tarsem Jassar',
        type: '',
        tags: ['2019']
      },
      {
        id: 2,
        title: 'Leekan',
        imgURL: 'assets/img/img2.jpg',
        description: 'Leekan Song from the Ashke album is voiced by famous singer Amrinder Gill. The lyrics of Leekan Song from Ashke album are written by Raj Ranjodh',
        creator: 'Amrinder Gill',
         type: 'Romantic',
        tags: ['2018']
      },
      {
        id: 3,
        title: 'Rutba',
        imgURL: 'assets/img/Img3.jpg',
        description: 'Rutba Lyrics by Satinder Sartaaj is brand new Punjabi song from movie Kali Jotta and this latest song is featuring Neeru Bajwa, Wamiqa Gabbi.',
        creator: 'Satinder Sartaj ',
        type: 'Romantic',
        tags: ['2023']
      },
      {
        id: 4,
        title: 'Laung Laachi',
        imgURL: 'assets/img/img4.png',
        description: 'Laung Laachi is a Punjabi romantic song from the movie "Laung Laachi".',
        creator: 'Mannat Noor',
        type: 'Punjabi',
        tags: ['Romantic', 'Punjabi']
      },
      {
        id: 5,
        title: 'Lamberghini',
        imgURL: 'assets/img/img5.jpg',
        description: 'Lamberghini is a popular Punjabi song by The Doorbeen featuring Ragini.',
        creator: 'Jassi Gill',
        type: 'Punjabi',
        tags: ['Pop', 'Punjabi']
      },
      {
        id: 6,
        title: 'Lamberghini',
        imgURL: 'assets/img/img5.jpg',
        description: 'Lamberghini is a popular Punjabi song by The Doorbeen featuring Ragini.',
        creator: 'Jassi Gill',
        type: '',
        tags: ['Pop', 'Punjabi']
      },
      {
        id: 7,
        title: 'Lamberghini02',
        imgURL: 'assets/img/img5.jpg',
        description: 'Lamberghini is a popular Punjabi song by The Doorbeen featuring Ragini.',
        creator: 'Jassi Gill',
        type: 'Punjabi',
        tags: ['Pop', 'Punjabi']
      },
    ];
    findTitle : string ='';
    filterResult: boolean = false;
    message :string =''
    
    findContent() {
      this.filterResult = this.contentList.some(content => content.title.toLowerCase() === this.findTitle.toLowerCase());
    
      if (this.filterResult) {
        this.message = 'title exists.';
      } else {
        this.message = ' title does not exist.';
      }
    }
    ngOnInit(){
      
    }
    
  }
  