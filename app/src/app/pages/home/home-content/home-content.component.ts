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
      labelSrc: '../../../../assets/images/labels/portrait_label.png',
      labelHoverSrc:
        '../../../../assets/images/labels/portrait_label_hover.png',
      galleryUrl: '/gallery/portrait',
    },
    {
      imageSrc:
        '../../../../assets/images/travel/budapest/budapest_suburbs.jpg',
      labelSrc: '../../../../assets/images/labels/architecture_label.png',
      labelHoverSrc:
        '../../../../assets/images/labels/architecture_label_hover.png',
      galleryUrl: '/gallery/architecture',
    },
    {
      imageSrc: '../../../../assets/images/landscapes/snowdonia_1.jpg',
      labelSrc: '../../../../assets/images/labels/landscape_label.png',
      labelHoverSrc:
        '../../../../assets/images/labels/landscape_label_hover.png',
      galleryUrl: '/gallery/landscape',
    },
    {
      imageSrc: '../../../../assets/images/still_life/pocket_watch_1.jpg',
      labelSrc: '../../../../assets/images/labels/still_life_label.png',
      labelHoverSrc:
        '../../../../assets/images/labels/still_life_label_hover.png',
      galleryUrl: '/gallery/still_life',
    },
    {
      imageSrc: '../../../../assets/images/travel/paris/arc_de_triomphe_3.jpg',
      labelSrc: '../../../../assets/images/labels/travel_label.png',
      labelHoverSrc: '../../../../assets/images/labels/travel_label_hover.png',
      galleryUrl: '/gallery/travel',
    },
    {
      imageSrc:
        '../../../../assets/images/automotive/salon_prive_2021/bugatti_chiron_3.jpg',
      labelSrc: '../../../../assets/images/labels/automotive_label.png',
      labelHoverSrc:
        '../../../../assets/images/labels/automotive_label_hover.png',
      galleryUrl: '/gallery/automotive',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
