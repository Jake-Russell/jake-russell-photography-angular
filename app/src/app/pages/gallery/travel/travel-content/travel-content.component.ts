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
      labelText: 'Budapest 2019',
      galleryUrl: '/gallery/travel/budapest',
    },
    {
      imageSrc: '../../../../assets/images/travel/bratislava/bratislava_12.jpg',
      labelText: 'Bratislava 2019',
      galleryUrl: '/gallery/travel/bratislava',
    },
    {
      imageSrc: '../../../assets/images/travel/prague/prague_9.jpg',
      labelText: 'Prague 2019',
      galleryUrl: '/gallery/travel/prague',
    },
    {
      imageSrc: '../../../assets/images/travel/munich/munich_5.jpg',
      labelText: 'Munich 2019',
      galleryUrl: '/gallery/travel/munich',
    },
    {
      imageSrc:
        '../../../assets/images/travel/cologne/cologne_7_black_and_white.jpg',
      labelText: 'Cologne 2019',
      galleryUrl: '/gallery/travel/cologne',
    },
    {
      imageSrc: '../../../assets/images/travel/brussels/brussels_4.jpg',
      labelText: 'Brussels 2019',
      galleryUrl: '/gallery/travel/brussels',
    },
    {
      imageSrc: '../../../../assets/images/travel/paris/arc_de_triomphe_3.jpg',
      labelText: 'Paris 2022',
      galleryUrl: '/gallery/travel/paris',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
