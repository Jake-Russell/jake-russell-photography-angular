import { Component, OnInit } from '@angular/core';
import { Ratio } from 'src/app/common/ratio.enum';

@Component({
  selector: 'app-brussels-content',
  templateUrl: './brussels-content.component.html',
  styleUrls: ['./brussels-content.component.css'],
})
export class BrusselsContentComponent implements OnInit {
  carouselImages = [
    {
      imageSrc: '../../../assets/images/travel/brussels/brussels_2.jpg',
      imageAlt: '',
    },
    {
      imageSrc: '../../../assets/images/travel/brussels/brussels_3.jpg',
      imageAlt: '',
    },
    {
      imageSrc: '../../../assets/images/travel/brussels/brussels_7.jpg',
      imageAlt: '',
    },
    {
      imageSrc: '../../../assets/images/travel/brussels/brussels_8.jpg',
      imageAlt: '',
    },
  ];

  allImages = [
    {
      imageSrc: '../../../assets/images/travel/brussels/brussels_1.jpg',
      imageAlt: '',
      ratio: Ratio.Portrait,
    },
    {
      imageSrc: '../../../assets/images/travel/brussels/brussels_2.jpg',
      imageAlt: '',
      ratio: Ratio.Portrait,
    },
    {
      imageSrc: '../../../assets/images/travel/brussels/brussels_3.jpg',
      imageAlt: '',
      ratio: Ratio.Portrait,
    },
    {
      imageSrc: '../../../assets/images/travel/brussels/brussels_4.jpg',
      imageAlt: '',
      ratio: Ratio.Portrait,
    },
    {
      imageSrc: '../../../assets/images/travel/brussels/brussels_5.jpg',
      imageAlt: '',
      ratio: Ratio.Landscape,
    },
    {
      imageSrc: '../../../assets/images/travel/brussels/brussels_6.jpg',
      imageAlt: '',
      ratio: Ratio.Landscape,
    },
    {
      imageSrc: '../../../assets/images/travel/brussels/brussels_7.jpg',
      imageAlt: '',
      ratio: Ratio.Portrait,
    },
    {
      imageSrc: '../../../assets/images/travel/brussels/brussels_8.jpg',
      imageAlt: '',
      ratio: Ratio.Portrait,
    },
    {
      imageSrc: '../../../assets/images/travel/brussels/brussels_9.jpg',
      imageAlt: '',
      ratio: Ratio.Landscape,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
