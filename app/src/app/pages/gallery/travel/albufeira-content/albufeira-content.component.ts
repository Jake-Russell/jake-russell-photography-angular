import { Component, OnInit } from '@angular/core';
import { Ratio } from 'src/app/common/ratio.enum';

@Component({
  selector: 'app-albufeira-content',
  templateUrl: './albufeira-content.component.html',
  styleUrls: ['./albufeira-content.component.css']
})
export class AlbufeiraContentComponent implements OnInit {
  carouselImages = [
    {
      imageSrc: '../../../assets/images/travel/bratislava/bratislava_12.jpg',
      imageAlt: '',
    },
    {
      imageSrc: '../../../assets/images/travel/bratislava/bratislava_5.jpg',
      imageAlt: '',
    },
    {
      imageSrc: '../../../assets/images/travel/bratislava/bratislava_1.jpg',
      imageAlt: '',
    },
    {
      imageSrc: '../../../assets/images/travel/bratislava/bratislava_9.jpg',
      imageAlt: '',
    },
  ];

  galleryTitle = 'Bratislava Gallery';

  galleryText = ['Some text about Bratislava'];

  allImages = [
    {
      imageSrc: '../../../assets/images/travel/bratislava/bratislava_1.jpg',
      imageAlt: '',
      ratio: Ratio.Portrait,
    },
    {
      imageSrc: '../../../assets/images/travel/bratislava/bratislava_2.jpg',
      imageAlt: '',
      ratio: Ratio.Landscape,
    },
    {
      imageSrc: '../../../assets/images/travel/bratislava/bratislava_3.jpg',
      imageAlt: '',
      ratio: Ratio.Landscape,
    },
    {
      imageSrc:
        '../../../assets/images/travel/bratislava/bratislava_panorama_1.jpg',
      imageAlt: '',
      ratio: Ratio.Panorama,
    },
    {
      imageSrc:
        '../../../assets/images/travel/bratislava/bratislava_panorama_2.jpg',
      imageAlt: '',
      ratio: Ratio.Panorama,
    },
    {
      imageSrc: '../../../assets/images/travel/bratislava/bratislava_4.jpg',
      imageAlt: '',
      ratio: Ratio.Landscape,
    },
    {
      imageSrc: '../../../assets/images/travel/bratislava/bratislava_5.jpg',
      imageAlt: '',
      ratio: Ratio.Portrait,
    },
    {
      imageSrc: '../../../assets/images/travel/bratislava/bratislava_6.jpg',
      imageAlt: '',
      ratio: Ratio.Portrait,
    },
    {
      imageSrc: '../../../assets/images/travel/bratislava/bratislava_7.jpg',
      imageAlt: '',
      ratio: Ratio.Landscape,
    },
    {
      imageSrc: '../../../assets/images/travel/bratislava/bratislava_8.jpg',
      imageAlt: '',
      ratio: Ratio.Landscape,
    },
    {
      imageSrc: '../../../assets/images/travel/bratislava/bratislava_9.jpg',
      imageAlt: '',
      ratio: Ratio.Portrait,
    },
    {
      imageSrc: '../../../assets/images/travel/bratislava/bratislava_10.jpg',
      imageAlt: '',
      ratio: Ratio.Landscape,
    },
    {
      imageSrc: '../../../assets/images/travel/bratislava/bratislava_11.jpg',
      imageAlt: '',
      ratio: Ratio.Portrait,
    },
    {
      imageSrc: '../../../assets/images/travel/bratislava/bratislava_12.jpg',
      imageAlt: '',
      ratio: Ratio.Portrait,
    },
    {
      imageSrc: '../../../assets/images/travel/bratislava/bratislava_13.jpg',
      imageAlt: '',
      ratio: Ratio.Landscape,
    },
    {
      imageSrc: '../../../assets/images/travel/bratislava/bratislava_14.jpg',
      imageAlt: '',
      ratio: Ratio.Landscape,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
