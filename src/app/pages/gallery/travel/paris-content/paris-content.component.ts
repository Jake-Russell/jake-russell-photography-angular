import { Component, OnInit } from '@angular/core';
import { Ratio } from 'src/app/common/ratio.enum';

@Component({
  selector: 'paris-content',
  templateUrl: './paris-content.component.html',
  styleUrls: ['./paris-content.component.css'],
})
export class ParisContentComponent implements OnInit {
  carouselImages = [
    {
      imageSrc: '../../../assets/images/travel/paris/arc_de_triomphe_3.jpg',
      imageAlt: '',
    },
  ];

  galleryTitle = 'Paris Gallery';

  galleryText = ['Some text about Paris'];

  allImages = [
    {
      imageSrc: '../../../assets/images/travel/paris/car_trails.jpg',
      imageAlt: '',
      ratio: Ratio.Landscape,
    },
    {
      imageSrc: '../../../assets/images/travel/paris/louvre_1.jpg',
      imageAlt: '',
      ratio: Ratio.Portrait,
    },
    {
      imageSrc:
        '../../../assets/images/travel/paris/louvre_2_black_and_white.jpg',
      imageAlt: '',
      ratio: Ratio.Portrait,
    },
    {
      imageSrc:
        '../../../assets/images/travel/paris/louvre_3_black_and_white.jpg',
      imageAlt: '',
      ratio: Ratio.Portrait,
    },
    {
      imageSrc:
        '../../../assets/images/travel/paris/louvre_4_black_and_white.jpg',
      imageAlt: '',
      ratio: Ratio.Portrait,
    },
    {
      imageSrc: '../../../assets/images/travel/paris/louvre_5.jpg',
      imageAlt: '',
      ratio: Ratio.Portrait,
    },
    {
      imageSrc: '../../../assets/images/travel/paris/louvre_6.jpg',
      imageAlt: '',
      ratio: Ratio.Portrait,
    },
    {
      imageSrc: '../../../assets/images/travel/paris/louvre_7.jpg',
      imageAlt: '',
      ratio: Ratio.Portrait,
    },
    {
      imageSrc:
        '../../../assets/images/travel/paris/louvre_8_black_and_white.jpg',
      imageAlt: '',
      ratio: Ratio.Portrait,
    },
    {
      imageSrc:
        '../../../assets/images/travel/paris/louvre_9_black_and_white.jpg',
      imageAlt: '',
      ratio: Ratio.Portrait,
    },
    {
      imageSrc: '../../../assets/images/travel/paris/paris_streets_1.jpg',
      imageAlt: '',
      ratio: Ratio.Portrait,
    },
    {
      imageSrc:
        '../../../assets/images/travel/paris/paris_streets_2_black_and_white.jpg',
      imageAlt: '',
      ratio: Ratio.Portrait,
    },
    {
      imageSrc: '../../../assets/images/travel/paris/sunset_1_portrait.jpg',
      imageAlt: '',
      ratio: Ratio.Portrait,
    },
    {
      imageSrc: '../../../assets/images/travel/paris/sunset_2.jpg',
      imageAlt: '',
      ratio: Ratio.Landscape,
    },
    {
      imageSrc: '../../../assets/images/travel/paris/sunset_3.jpg',
      imageAlt: '',
      ratio: Ratio.Landscape,
    },
    {
      imageSrc: '../../../assets/images/travel/paris/sunset_4_portrait.jpg',
      imageAlt: '',
      ratio: Ratio.Portrait,
    },
    {
      imageSrc: '../../../assets/images/travel/paris/pompidou_centre.jpg',
      imageAlt: '',
      ratio: Ratio.Portrait,
    },
    {
      imageSrc:
        '../../../assets/images/travel/paris/paris_streets_3_black_and_white.jpg',
      imageAlt: '',
      ratio: Ratio.Portrait,
    },
    {
      imageSrc: '../../../assets/images/travel/paris/paris_streets_4.jpg',
      imageAlt: '',
      ratio: Ratio.Portrait,
    },
    {
      imageSrc:
        '../../../assets/images/travel/paris/paris_streets_5_black_and_white.jpg',
      imageAlt: '',
      ratio: Ratio.Portrait,
    },
    {
      imageSrc:
        '../../../assets/images/travel/paris/sacre_coeur_1_black_and_white.jpg',
      imageAlt: '',
      ratio: Ratio.Portrait,
    },
    {
      imageSrc:
        '../../../assets/images/travel/paris/sacre_coeur_2_black_and_white.jpg',
      imageAlt: '',
      ratio: Ratio.Portrait,
    },
    {
      imageSrc: '../../../assets/images/travel/paris/sacre_coeur_3.jpg',
      imageAlt: '',
      ratio: Ratio.Landscape,
    },
    {
      imageSrc: '../../../assets/images/travel/paris/sacre_coeur_4.jpg',
      imageAlt: '',
      ratio: Ratio.Portrait,
    },
    {
      imageSrc:
        '../../../assets/images/travel/paris/sacre_coeur_5_black_and_white.jpg',
      imageAlt: '',
      ratio: Ratio.Portrait,
    },
    {
      imageSrc: '../../../assets/images/travel/paris/river_seine_1.jpg',
      imageAlt: '',
      ratio: Ratio.Landscape,
    },
    {
      imageSrc: '../../../assets/images/travel/paris/river_seine_2.jpg',
      imageAlt: '',
      ratio: Ratio.Portrait,
    },
    {
      imageSrc: '../../../assets/images/travel/paris/river_seine_3.jpg',
      imageAlt: '',
      ratio: Ratio.Portrait,
    },
    {
      imageSrc: '../../../assets/images/travel/paris/river_seine_4.jpg',
      imageAlt: '',
      ratio: Ratio.Landscape,
    },
    {
      imageSrc: '../../../assets/images/travel/paris/river_seine_5.jpg',
      imageAlt: '',
      ratio: Ratio.Portrait,
    },
    {
      imageSrc:
        '../../../assets/images/travel/paris/eiffel_tower_1_black_and_white.jpg',
      imageAlt: '',
      ratio: Ratio.Landscape,
    },
    {
      imageSrc: '../../../assets/images/travel/paris/eiffel_tower_1.jpg',
      imageAlt: '',
      ratio: Ratio.Landscape,
    },
    {
      imageSrc: '../../../assets/images/travel/paris/eiffel_tower_2.jpg',
      imageAlt: '',
      ratio: Ratio.Landscape,
    },
    {
      imageSrc: '../../../assets/images/travel/paris/eiffel_tower_3.jpg',
      imageAlt: '',
      ratio: Ratio.Landscape,
    },
    {
      imageSrc:
        '../../../assets/images/travel/paris/eiffel_tower_4_black_and_white.jpg',
      imageAlt: '',
      ratio: Ratio.Portrait,
    },
    {
      imageSrc: '../../../assets/images/travel/paris/eiffel_tower_4.jpg',
      imageAlt: '',
      ratio: Ratio.Portrait,
    },
    {
      imageSrc: '../../../assets/images/travel/paris/eiffel_tower_5.jpg',
      imageAlt: '',
      ratio: Ratio.Portrait,
    },
    {
      imageSrc: '../../../assets/images/travel/paris/eiffel_tower_6.jpg',
      imageAlt: '',
      ratio: Ratio.Portrait,
    },
    {
      imageSrc:
        '../../../assets/images/travel/paris/eiffel_tower_7_black_and_white.jpg',
      imageAlt: '',
      ratio: Ratio.Portrait,
    },
    {
      imageSrc: '../../../assets/images/travel/paris/eiffel_tower_7.jpg',
      imageAlt: '',
      ratio: Ratio.Portrait,
    },
    {
      imageSrc:
        '../../../assets/images/travel/paris/arc_de_triomphe_1_black_and_white.jpg',
      imageAlt: '',
      ratio: Ratio.Landscape,
    },
    {
      imageSrc: '../../../assets/images/travel/paris/arc_de_triomphe_1.jpg',
      imageAlt: '',
      ratio: Ratio.Landscape,
    },
    {
      imageSrc: '../../../assets/images/travel/paris/arc_de_triomphe_2.jpg',
      imageAlt: '',
      ratio: Ratio.Landscape,
    },
    {
      imageSrc:
        '../../../assets/images/travel/paris/arc_de_triomphe_3_black_and_white.jpg',
      imageAlt: '',
      ratio: Ratio.Portrait,
    },
    {
      imageSrc: '../../../assets/images/travel/paris/arc_de_triomphe_3.jpg',
      imageAlt: '',
      ratio: Ratio.Portrait,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
