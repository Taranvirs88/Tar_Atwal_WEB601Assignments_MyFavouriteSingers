import { Component } from '@angular/core';

@Component({
  selector: 'app-content-list',
  template: `
    <div class="content-list">
      <app-content-card *ngFor="let content of contents" [content]="content"></app-content-card>
    </div>
  `,
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent {
  contents = [
    {
      id: 1,
      title: 'Tera Tera',
      description: 'Tarsem Jassar has written and sung the song Tera Tera that emphasizes how we humans like to claim rights to everything we come across in the world; while none of it belongs to us. The Almighty created everything we see and feel. He owns all of it. There is nothing that ‘one’ can take away from this world. We come empty-handed in this world, and we’re leaving here with nothing.',
      creator: 'Tarsem Jassar',
      image: 'assets/img/img1.jpg',
      type: 'Motivational Song ',
      tags: ['2019']
    },
    {
      id: 2,
      title: 'Leekan',
      description: 'Leekan Song from the Ashke album is voiced by famous singer Amrinder Gill. The lyrics of Leekan Song from Ashke album are written by Raj Ranjodh',
      creator: 'Amrinder Gill',
      image: 'assets/img/img2.jpg',
      type: 'Romantic',
      tags: ['2018']
    },
    {
      id: 3,
      title: 'Rutba',
      description: 'Rutba Lyrics by Satinder Sartaaj is brand new Punjabi song from movie Kali Jotta and this latest song is featuring Neeru Bajwa, Wamiqa Gabbi.',
      creator: 'Satinder Sartaj ',
      image: 'assets/img/Img3.jpg',
      type: 'Soofy Music',
      tags: ['2023']
    },
    {
      id: 4,
      title: 'Laung Laachi',
      image: 'assets/img/img4.png',
      description: 'Laung Laachi is a Punjabi romantic song from the movie "Laung Laachi".',
      creator: 'Mannat Noor',
      type: 'Punjabi',
      tags: ['Romantic', 'Punjabi']
    },
    {
      id: 5,
      title: 'Lamberghini',
      image: 'assets/img/img5.jpg',
      description: 'Lamberghini is a popular Punjabi song by The Doorbeen featuring Ragini.',
      creator: 'Jassi Gill',
      type: 'Punjabi',
      tags: ['Pop', 'Punjabi']
    },
    {
      id: 6,
      title: 'Galwakdi',
      image: 'assets/img/img6.jpg',
      description: 'Lehanga is a Punjabi wedding song by Jass Manak.',
      creator: 'Tarsem Jassar',
      type: 'Punjabi',
      tags: ['Romantic']
    },
  ];
}