import { Component } from '@angular/core';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent {
    contentListArray =[
      {
        id: 1,
        title: 'Tera Tera',
        imgURL: 'assets/img/img1.jpg',
        description: 'Tarsem Jassar has written and sung the song Tera Tera that emphasizes how we humans like to claim rights to everything we come across in the world; while none of it belongs to us.',
        creator: 'Tarsem Jassar',
        type: 'Motivational Song ',
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
        type: 'Soofy Music',
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
    ];

  }