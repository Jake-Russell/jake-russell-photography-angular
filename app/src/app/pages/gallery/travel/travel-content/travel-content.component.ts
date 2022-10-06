import { Component, OnInit } from '@angular/core';
import { ImageThumbnail } from 'src/app/image-thumbnail.model';

@Component({
  selector: 'travel-content',
  templateUrl: './travel-content.component.html',
  styleUrls: ['./travel-content.component.css'],
})
export class TravelContentComponent implements OnInit {
  carouselImages = [
    {
      imageSrc: '../../../assets/images/travel/budapest/budapest_8.jpg',
      imageAlt: '',
    },
    {
      imageSrc: '../../../assets/images/travel/bratislava/bratislava_8.jpg',
      imageAlt: '',
    },
    {
      imageSrc: '../../../assets/images/travel/prague/prague_12.jpg',
      imageAlt: '',
    },
    {
      imageSrc: '../../../assets/images/travel/brussels/brussels_9.jpg',
      imageAlt: '',
    },
    {
      imageSrc: '../../../assets/images/travel/paris/eiffel_tower_2.jpg',
      imageAlt: '',
    },
    {
      imageSrc: '../../../assets/images/travel/albufeira/rocks_8.jpg',
      imageAlt: '',
    },
  ];

  galleryTitle = 'Travel Galleries';

  galleryText = [
    'Travel is a huge passion of mine, and I love to explore all different parts of the world.',
    "Wherever I go, I make sure that my trusty camera is always to hand so that I can capture some of the world's most beautiful landscapes and architecture.",
    'In the Summer of 2019, I went on an Interrailing trip around Europe, visiting Budapest, Bratislava, Prague, Munich, Cologne and finally Brussels. This fantastic trip really kick started my passion for travel, and my list of places to visit is ever growing!',
    'Unfortunately shortly after the Interrailing trip, Covid hit. This put a stop to any travel plans I may have wanted to persue.',
    'In 2022, I have been quick to pick up my passion again, and have visited Paris in February, and Albufeira in May.',
  ];

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
      imageSrc: '../../../assets/images/travel/london/big_ben_1.jpg',
      labelText: 'London 2019',
      galleryUrl: '/gallery/travel/london',
    },
    {
      imageSrc: '../../../../assets/images/travel/paris/arc_de_triomphe_3.jpg',
      labelText: 'Paris 2022',
      galleryUrl: '/gallery/travel/paris',
    },
    {
      imageSrc: '../../../../assets/images/travel/albufeira/boat_tour_13.jpg',
      labelText: 'Albufeira 2022',
      galleryUrl: '/gallery/travel/albufeira',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
