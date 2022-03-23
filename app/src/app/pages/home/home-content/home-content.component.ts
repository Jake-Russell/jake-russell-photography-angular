import { Component, OnInit } from '@angular/core';
import { ImageThumbnail } from 'src/app/image-thumbnail.model';

@Component({
  selector: 'home-content',
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.css'],
})
export class HomeContentComponent implements OnInit {
  photoListImages: ImageThumbnail[] = [
    {
      imageSrc: '../../../../assets/images/portraits/nan.jpg',
      labelText: 'Portrait',
      galleryUrl: '/gallery/portrait',
    },
    {
      imageSrc:
        '../../../../assets/images/travel/budapest/budapest_suburbs.jpg',
      labelText: 'Architecture',
      galleryUrl: '/gallery/architecture',
    },
    {
      imageSrc: '../../../../assets/images/landscapes/snowdonia_1.jpg',
      labelText: 'Landscape',
      galleryUrl: '/gallery/landscape',
    },
    {
      imageSrc: '../../../../assets/images/still_life/pocket_watch_1.jpg',
      labelText: 'Still Life',
      galleryUrl: '/gallery/still_life',
    },
    {
      imageSrc: '../../../../assets/images/travel/paris/arc_de_triomphe_3.jpg',
      labelText: 'Travel',
      galleryUrl: '/gallery/travel',
    },
    {
      imageSrc:
        '../../../../assets/images/automotive/salon_prive_2021/bugatti_chiron_1.jpg',
      labelText: 'Automotive',
      galleryUrl: '/gallery/automotive',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
