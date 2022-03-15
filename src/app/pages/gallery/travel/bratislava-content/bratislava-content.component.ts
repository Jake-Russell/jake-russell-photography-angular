import { Component, OnInit } from '@angular/core';
import { Ratio } from 'src/app/common/ratio.enum';

@Component({
  selector: 'app-bratislava-content',
  templateUrl: './bratislava-content.component.html',
  styleUrls: ['./bratislava-content.component.css'],
})
export class BratislavaContentComponent implements OnInit {
  carouselImages = [
    {
      imageSrc: '../../../assets/images/travel/bratislava/bratislava_1.jpg',
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
      imageSrc:
        '../../../assets/images/travel/bratislava/bratislava_panorama_1.jpg',
      imageAlt: '',
      ratio: Ratio.Portrait,
    },
    {
      imageSrc:
        '../../../assets/images/travel/bratislava/bratislava_panorama_2.jpg',
      imageAlt: '',
      ratio: Ratio.Portrait,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
