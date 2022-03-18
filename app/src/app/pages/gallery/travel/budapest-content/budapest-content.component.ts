import { Component, OnInit } from '@angular/core';
import { Ratio } from 'src/app/common/ratio.enum';

@Component({
  selector: 'budapest-content',
  templateUrl: './budapest-content.component.html',
  styleUrls: ['./budapest-content.component.css'],
})
export class BudapestContentComponent implements OnInit {
  carouselImages = [
    {
      imageSrc: '../../../assets/images/travel/budapest/budapest_streets.jpg',
      imageAlt: '',
    },
    {
      imageSrc: '../../../assets/images/travel/budapest/budapest_suburbs.jpg',
      imageAlt: '',
    },
    {
      imageSrc: '../../../assets/images/travel/budapest/budapest_4.jpg',
      imageAlt: '',
    },
    {
      imageSrc: '../../../assets/images/travel/budapest/budapest_6.jpg',
      imageAlt: '',
    },
  ];

  galleryTitle = 'Budapest Gallery';

  galleryText = ['Some text about Budapest'];

  allImages = [
    {
      imageSrc:
        '../../../assets/images/travel/budapest/budapest_panorama_1.jpg',
      imageAlt: '',
      ratio: Ratio.Panorama,
    },
    {
      imageSrc:
        '../../../assets/images/travel/budapest/budapest_panorama_2.jpg',
      imageAlt: '',
      ratio: Ratio.Panorama,
    },
    {
      imageSrc: '../../../assets/images/travel/budapest/budapest_streets.jpg',
      imageAlt: '',
      ratio: Ratio.Portrait,
    },
    {
      imageSrc: '../../../assets/images/travel/budapest/budapest_suburbs.jpg',
      imageAlt: '',
      ratio: Ratio.Portrait,
    },
    {
      imageSrc: '../../../assets/images/travel/budapest/budapest_1.jpg',
      imageAlt: '',
      ratio: Ratio.Landscape,
    },
    {
      imageSrc: '../../../assets/images/travel/budapest/budapest_2.jpg',
      imageAlt: '',
      ratio: Ratio.Landscape,
    },
    {
      imageSrc: '../../../assets/images/travel/budapest/budapest_3.jpg',
      imageAlt: '',
      ratio: Ratio.Portrait,
    },
    {
      imageSrc: '../../../assets/images/travel/budapest/budapest_4.jpg',
      imageAlt: '',
      ratio: Ratio.Portrait,
    },
    {
      imageSrc: '../../../assets/images/travel/budapest/budapest_5.jpg',
      imageAlt: '',
      ratio: Ratio.Portrait,
    },
    {
      imageSrc: '../../../assets/images/travel/budapest/budapest_6.jpg',
      imageAlt: '',
      ratio: Ratio.Portrait,
    },
    {
      imageSrc: '../../../assets/images/travel/budapest/budapest_7.jpg',
      imageAlt: '',
      ratio: Ratio.Portrait,
    },
    {
      imageSrc: '../../../assets/images/travel/budapest/budapest_8.jpg',
      imageAlt: '',
      ratio: Ratio.Landscape,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
