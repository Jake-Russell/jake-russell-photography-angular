import { Component, OnInit } from '@angular/core';
import { Ratio } from 'src/app/common/ratio.enum';

@Component({
  selector: 'app-albufeira-content',
  templateUrl: './albufeira-content.component.html',
  styleUrls: ['./albufeira-content.component.css'],
})
export class AlbufeiraContentComponent implements OnInit {
  carouselImages = [
    {
      imageSrc: '../../../assets/images/travel/albufeira/boat_tour_13.jpg',
      imageAlt: '',
    },
    {
      imageSrc: '../../../assets/images/travel/albufeira/sunset_4.jpg',
      imageAlt: '',
    },
    {
      imageSrc: '../../../assets/images/travel/albufeira/rocks_7.jpg',
      imageAlt: '',
    },
    {
      imageSrc: '../../../assets/images/travel/albufeira/boat_tour_1.jpg',
      imageAlt: '',
    },
  ];

  allImages = [
    {
      imageSrc: '../../../assets/images/travel/albufeira/plane_1.jpg',
      imageAlt: '',
      ratio: Ratio.Portrait,
    },
    {
      imageSrc: '../../../assets/images/travel/albufeira/sunset_1.jpg',
      imageAlt: '',
      ratio: Ratio.Portrait,
    },
    {
      imageSrc: '../../../assets/images/travel/albufeira/sunset_2.jpg',
      imageAlt: '',
      ratio: Ratio.Landscape,
    },
    {
      imageSrc: '../../../assets/images/travel/albufeira/sunset_3.jpg',
      imageAlt: '',
      ratio: Ratio.Portrait,
    },
    {
      imageSrc: '../../../assets/images/travel/albufeira/sunset_4.jpg',
      imageAlt: '',
      ratio: Ratio.Portrait,
    },
    {
      imageSrc: '../../../assets/images/travel/albufeira/sunset_5.jpg',
      imageAlt: '',
      ratio: Ratio.Portrait,
    },
    {
      imageSrc: '../../../assets/images/travel/albufeira/lunch_view.jpg',
      imageAlt: '',
      ratio: Ratio.Portrait,
    },
    {
      imageSrc: '../../../assets/images/travel/albufeira/pirate_tour_1.jpg',
      imageAlt: '',
      ratio: Ratio.Landscape,
    },
    {
      imageSrc: '../../../assets/images/travel/albufeira/pirate_tour_2.jpg',
      imageAlt: '',
      ratio: Ratio.Landscape,
    },
    {
      imageSrc: '../../../assets/images/travel/albufeira/pirate_tour_3.jpg',
      imageAlt: '',
      ratio: Ratio.Landscape,
    },
    {
      imageSrc: '../../../assets/images/travel/albufeira/pirate_tour_4.jpg',
      imageAlt: '',
      ratio: Ratio.Portrait,
    },
    {
      imageSrc: '../../../assets/images/travel/albufeira/pirate_tour_5.jpg',
      imageAlt: '',
      ratio: Ratio.Square,
    },
    {
      imageSrc: '../../../assets/images/travel/albufeira/pirate_tour_6.jpg',
      imageAlt: '',
      ratio: Ratio.Square,
    },
    {
      imageSrc: '../../../assets/images/travel/albufeira/rocks_1.jpg',
      imageAlt: '',
      ratio: Ratio.Portrait,
    },
    {
      imageSrc: '../../../assets/images/travel/albufeira/rocks_2.jpg',
      imageAlt: '',
      ratio: Ratio.Landscape,
    },
    {
      imageSrc: '../../../assets/images/travel/albufeira/rocks_3.jpg',
      imageAlt: '',
      ratio: Ratio.Portrait,
    },
    {
      imageSrc: '../../../assets/images/travel/albufeira/rocks_4.jpg',
      imageAlt: '',
      ratio: Ratio.Portrait,
    },
    {
      imageSrc: '../../../assets/images/travel/albufeira/rocks_5.jpg',
      imageAlt: '',
      ratio: Ratio.Landscape,
    },
    {
      imageSrc: '../../../assets/images/travel/albufeira/rocks_6.jpg',
      imageAlt: '',
      ratio: Ratio.Landscape,
    },
    {
      imageSrc: '../../../assets/images/travel/albufeira/rocks_7.jpg',
      imageAlt: '',
      ratio: Ratio.Portrait,
    },
    {
      imageSrc: '../../../assets/images/travel/albufeira/rocks_8.jpg',
      imageAlt: '',
      ratio: Ratio.Landscape,
    },
    {
      imageSrc: '../../../assets/images/travel/albufeira/rocks_9.jpg',
      imageAlt: '',
      ratio: Ratio.Portrait,
    },
    {
      imageSrc: '../../../assets/images/travel/albufeira/rocks_10.jpg',
      imageAlt: '',
      ratio: Ratio.Portrait,
    },
    {
      imageSrc: '../../../assets/images/travel/albufeira/rocks_11.jpg',
      imageAlt: '',
      ratio: Ratio.Portrait,
    },
    {
      imageSrc: '../../../assets/images/travel/albufeira/rocks_12.jpg',
      imageAlt: '',
      ratio: Ratio.Portrait,
    },
    {
      imageSrc: '../../../assets/images/travel/albufeira/rocks_13.jpg',
      imageAlt: '',
      ratio: Ratio.Portrait,
    },
    {
      imageSrc: '../../../assets/images/travel/albufeira/rocks_14.jpg',
      imageAlt: '',
      ratio: Ratio.Landscape,
    },
    {
      imageSrc: '../../../assets/images/travel/albufeira/boat_tour_1.jpg',
      imageAlt: '',
      ratio: Ratio.Portrait,
    },
    {
      imageSrc: '../../../assets/images/travel/albufeira/boat_tour_2.jpg',
      imageAlt: '',
      ratio: Ratio.Landscape,
    },
    {
      imageSrc: '../../../assets/images/travel/albufeira/boat_tour_3.jpg',
      imageAlt: '',
      ratio: Ratio.Portrait,
    },
    {
      imageSrc: '../../../assets/images/travel/albufeira/boat_tour_4.jpg',
      imageAlt: '',
      ratio: Ratio.Landscape,
    },
    {
      imageSrc: '../../../assets/images/travel/albufeira/boat_tour_5.jpg',
      imageAlt: '',
      ratio: Ratio.Landscape,
    },
    {
      imageSrc: '../../../assets/images/travel/albufeira/boat_tour_6.jpg',
      imageAlt: '',
      ratio: Ratio.Square,
    },
    {
      imageSrc: '../../../assets/images/travel/albufeira/boat_tour_7.jpg',
      imageAlt: '',
      ratio: Ratio.Landscape,
    },
    {
      imageSrc: '../../../assets/images/travel/albufeira/boat_tour_8.jpg',
      imageAlt: '',
      ratio: Ratio.Square,
    },
    {
      imageSrc: '../../../assets/images/travel/albufeira/boat_tour_9.jpg',
      imageAlt: '',
      ratio: Ratio.Landscape,
    },
    {
      imageSrc: '../../../assets/images/travel/albufeira/boat_tour_10.jpg',
      imageAlt: '',
      ratio: Ratio.Portrait,
    },
    {
      imageSrc: '../../../assets/images/travel/albufeira/boat_tour_11.jpg',
      imageAlt: '',
      ratio: Ratio.Portrait,
    },
    {
      imageSrc: '../../../assets/images/travel/albufeira/boat_tour_12.jpg',
      imageAlt: '',
      ratio: Ratio.Landscape,
    },
    {
      imageSrc: '../../../assets/images/travel/albufeira/boat_tour_13.jpg',
      imageAlt: '',
      ratio: Ratio.Portrait,
    },
    {
      imageSrc: '../../../assets/images/travel/albufeira/boat_tour_14.jpg',
      imageAlt: '',
      ratio: Ratio.Landscape,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
