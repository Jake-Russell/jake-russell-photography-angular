import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portrait-content',
  templateUrl: './portrait-content.component.html',
  styleUrls: ['./portrait-content.component.css'],
})
export class PortraitContentComponent implements OnInit {
  images = [
    {
      imageSrc: '../../../../../assets/images/portraits/chloe_1.jpg',
      imageAlt: 'Architecture',
    },
    {
      imageSrc: '../../../../../assets/images/portraits/nan.jpg',
      imageAlt: 'Landscape',
    },
    {
      imageSrc: '../../../../../assets/images/portraits/grandad_1.jpg',
      imageAlt: 'Portrait',
    },
    {
      imageSrc: '../../../../../assets/images/portraits/overlay.jpg',
      imageAlt: 'Still Life',
    },
  ];
  constructor() {}

  ngOnInit() {}
}
