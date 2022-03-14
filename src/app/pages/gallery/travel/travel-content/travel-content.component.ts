import { Component, OnInit } from '@angular/core';
import { ImageThumbnail } from 'src/app/image-thumbnail.model';

@Component({
  selector: 'app-travel-content',
  templateUrl: './travel-content.component.html',
  styleUrls: ['./travel-content.component.css'],
})
export class TravelContentComponent implements OnInit {
  photoListImages: ImageThumbnail[] = [
    {
      imageSrc: '../../../../assets/images/architecture/budapest_suburbs.jpg',
      labelSrc: '../../../../assets/images/labels/travel_budapest_label.png',
      labelHoverSrc:
        '../../../../assets/images/labels/travel_budapest_label_hover.png',
      galleryUrl: '/about',
    },
    {
      imageSrc: '../../../../assets/images/travel/paris/arc_de_triomphe_3.jpg',
      labelSrc: '../../../../assets/images/labels/travel_paris_label.png',
      labelHoverSrc:
        '../../../../assets/images/labels/travel_paris_label_hover.png',
      galleryUrl: '/about',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
