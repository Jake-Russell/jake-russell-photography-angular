import { Component, OnInit } from '@angular/core';
import { Ratio } from 'src/app/common/ratio.enum';

@Component({
  selector: 'app-munich-content',
  templateUrl: './munich-content.component.html',
  styleUrls: ['./munich-content.component.css'],
})
export class MunichContentComponent implements OnInit {
  carouselImages = [
    {
      imageSrc: '../../../assets/images/travel/munich/munich_5.jpg',
      imageAlt: '',
    },
    {
      imageSrc: '../../../assets/images/travel/munich/munich_3.jpg',
      imageAlt: '',
    },
    {
      imageSrc: '../../../assets/images/travel/munich/munich_1.jpg',
      imageAlt: '',
    },
    {
      imageSrc: '../../../assets/images/travel/munich/munich_4.jpg',
      imageAlt: '',
    },
  ];

  galleryTitle = 'Munich Gallery';

  galleryText = ['Some text about Munich'];

  allImages = [
    {
      imageSrc: '../../../assets/images/travel/munich/munich_1.jpg',
      imageAlt: '',
      ratio: Ratio.Portrait,
    },
    {
      imageSrc: '../../../assets/images/travel/munich/munich_2.jpg',
      imageAlt: '',
      ratio: Ratio.Square,
    },
    {
      imageSrc: '../../../assets/images/travel/munich/munich_3.jpg',
      imageAlt: '',
      ratio: Ratio.Portrait,
    },
    {
      imageSrc: '../../../assets/images/travel/munich/munich_4.jpg',
      imageAlt: '',
      ratio: Ratio.Portrait,
    },
    {
      imageSrc: '../../../assets/images/travel/munich/munich_5.jpg',
      imageAlt: '',
      ratio: Ratio.Portrait,
    },
    {
      imageSrc: '../../../assets/images/travel/munich/munich_6.jpg',
      imageAlt: '',
      ratio: Ratio.Portrait,
    },
    {
      imageSrc: '../../../assets/images/travel/munich/munich_7.jpg',
      imageAlt: '',
      ratio: Ratio.Landscape,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
