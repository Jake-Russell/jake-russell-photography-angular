import { Component, OnInit } from '@angular/core';
import { ImageThumbnail } from 'src/app/image-thumbnail.model';

@Component({
  selector: 'travel-content',
  templateUrl: './travel-content.component.html',
  styleUrls: ['./travel-content.component.css'],
})
export class TravelContentComponent implements OnInit {
  photoListImages: ImageThumbnail[] = [
    {
      imageSrc:
        '../../../../assets/images/travel/budapest/budapest_suburbs.jpg',
      labelSrc: '../../../../assets/images/labels/travel_budapest_label.png',
      labelHoverSrc:
        '../../../../assets/images/labels/travel_budapest_label_hover.png',
      galleryUrl: '/gallery/travel/budapest',
    },
    {
      imageSrc: '../../../../assets/images/travel/bratislava/bratislava_12.jpg',
      labelSrc: '../../../../assets/images/labels/travel_bratislava_label.png',
      labelHoverSrc:
        '../../../../assets/images/labels/travel_bratislava_label_hover.png',
      galleryUrl: '/gallery/travel/bratislava',
    },
    {
      imageSrc: '../../../assets/images/travel/prague/prague_9.jpg',
      labelSrc: '../../../../assets/images/labels/travel_prague_label.png',
      labelHoverSrc:
        '../../../../assets/images/labels/travel_prague_label_hover.png',
      galleryUrl: '/gallery/travel/prague',
    },
    {
      imageSrc: '../../../assets/images/travel/munich/munich_3.jpg',
      labelSrc: '../../../../assets/images/labels/travel_munich_label.png',
      labelHoverSrc:
        '../../../../assets/images/labels/travel_munich_label_hover.png',
      galleryUrl: '/gallery/travel/munich',
    },
    {
      imageSrc: '../../../../assets/images/travel/paris/arc_de_triomphe_3.jpg',
      labelSrc: '../../../../assets/images/labels/travel_paris_label.png',
      labelHoverSrc:
        '../../../../assets/images/labels/travel_paris_label_hover.png',
      galleryUrl: '/gallery/travel/paris',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
