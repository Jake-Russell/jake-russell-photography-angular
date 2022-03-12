import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portrait-content',
  templateUrl: './portrait-content.component.html',
  styleUrls: ['./portrait-content.component.css'],
})
export class PortraitContentComponent implements OnInit {
  images = [
    {
      imageSrc: '../../../../../assets/images/home_images/architecture.jpg',
      imageAlt: 'Architecture',
    },
    {
      imageSrc: '../../../../../assets/images/home_images/landscape.jpg',
      imageAlt: 'Landscape',
    },
    {
      imageSrc: '../../../../../assets/images/home_images/portrait.jpg',
      imageAlt: 'Portrait',
    },
    {
      imageSrc: '../../../../../assets/images/home_images/still_life.jpg',
      imageAlt: 'Still Life',
    },
  ];
  constructor() {}

  ngOnInit() {}
}
