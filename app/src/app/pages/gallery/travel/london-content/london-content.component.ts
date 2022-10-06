import { Component, OnInit } from '@angular/core';
import { Ratio } from 'src/app/common/ratio.enum';

@Component({
  selector: 'app-london-content',
  templateUrl: './london-content.component.html',
  styleUrls: ['./london-content.component.css'],
})
export class LondonContentComponent implements OnInit {
  carouselImages = [
    {
      imageSrc: '../../../assets/images/travel/london/big_ben_1.jpg',
      imageAlt: '',
    },
  ];

  allImages = [
    {
      imageSrc: '../../../assets/images/travel/london/big_ben_1.jpg',
      imageAlt: '',
      ratio: Ratio.Portrait,
    },
    {
      imageSrc: '../../../assets/images/travel/london/big_ben_2.jpg',
      imageAlt: '',
      ratio: Ratio.Portrait,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
