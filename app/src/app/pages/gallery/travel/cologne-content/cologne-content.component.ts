import { Component, OnInit } from '@angular/core';
import { Ratio } from 'src/app/common/ratio.enum';

@Component({
  selector: 'app-cologne-content',
  templateUrl: './cologne-content.component.html',
  styleUrls: ['./cologne-content.component.css'],
})
export class CologneContentComponent implements OnInit {
  carouselImages = [
    {
      imageSrc: '../../../assets/images/travel/cologne/cologne_2.jpg',
      imageAlt: '',
    },
  ];

  allImages = [
    {
      imageSrc: '../../../assets/images/travel/cologne/cologne_1.jpg',
      imageAlt: '',
      ratio: Ratio.Portrait,
    },
    {
      imageSrc: '../../../assets/images/travel/cologne/cologne_2.jpg',
      imageAlt: '',
      ratio: Ratio.Landscape,
    },
    {
      imageSrc: '../../../assets/images/travel/cologne/cologne_3.jpg',
      imageAlt: '',
      ratio: Ratio.Portrait,
    },
    {
      imageSrc: '../../../assets/images/travel/cologne/cologne_4.jpg',
      imageAlt: '',
      ratio: Ratio.Portrait,
    },
    {
      imageSrc: '../../../assets/images/travel/cologne/cologne_5.jpg',
      imageAlt: '',
      ratio: Ratio.Portrait,
    },
    {
      imageSrc: '../../../assets/images/travel/cologne/cologne_6.jpg',
      imageAlt: '',
      ratio: Ratio.Portrait,
    },
    {
      imageSrc:
        '../../../assets/images/travel/cologne/cologne_7_black_and_white.jpg',
      imageAlt: '',
      ratio: Ratio.Portrait,
    },
    {
      imageSrc: '../../../assets/images/travel/cologne/cologne_7_colour.jpg',
      imageAlt: '',
      ratio: Ratio.Portrait,
    },
    {
      imageSrc: '../../../assets/images/travel/cologne/cologne_8.jpg',
      imageAlt: '',
      ratio: Ratio.Portrait,
    },
    {
      imageSrc: '../../../assets/images/travel/cologne/cologne_9.jpg',
      imageAlt: '',
      ratio: Ratio.Portrait,
    },
    {
      imageSrc: '../../../assets/images/travel/cologne/cologne_10.jpg',
      imageAlt: '',
      ratio: Ratio.Portrait,
    },
    {
      imageSrc: '../../../assets/images/travel/cologne/cologne_panorama.jpg',
      imageAlt: '',
      ratio: Ratio.Panorama,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
