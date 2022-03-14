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
  ];

  galleryTitle = 'Budapest Gallery';

  galleryText = ['Some text about Budapest'];

  allImages = [
    {
      imageSrc: '../../../assets/images/travel/budapest/budapest_panorama.jpg',
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
  ];

  constructor() {}

  ngOnInit(): void {}
}
