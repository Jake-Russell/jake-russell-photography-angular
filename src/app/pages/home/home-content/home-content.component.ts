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
      imageSrc: '../../../../assets/images/home_images/portrait.jpg',
      labelSrc: '../../../../assets/images/labels/portrait_label.png',
      labelHoverSrc:
        '../../../../assets/images/labels/portrait_label_hover.png',
      galleryUrl: '/gallery/portrait',
    },
    {
      imageSrc: '../../../../assets/images/home_images/architecture.jpg',
      labelSrc: '../../../../assets/images/labels/architecture_label.png',
      labelHoverSrc:
        '../../../../assets/images/labels/architecture_label_hover.png',
      galleryUrl: '/gallery/architecture',
    },
    {
      imageSrc: '../../../../assets/images/home_images/landscape.jpg',
      labelSrc: '../../../../assets/images/labels/landscape_label.png',
      labelHoverSrc:
        '../../../../assets/images/labels/landscape_label_hover.png',
      galleryUrl: '/gallery/landscape',
    },
    {
      imageSrc: '../../../../assets/images/home_images/still_life.jpg',
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
  ];

  constructor() {}

  ngOnInit(): void {}
}
