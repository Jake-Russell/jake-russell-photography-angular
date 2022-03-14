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
      imageSrc: '../../../assets/images/still_life/pocket_watch_1.jpg',
      imageAlt: '',
    },
  ];

  galleryTitle = 'Paris Gallery';

  galleryText = ['Some text about Paris'];

  allImages = [
    {
      imageSrc: '../../../assets/images/still_life/arms_around_tree.jpg',
      imageAlt: '',
      ratio: Ratio.Portrait,
    },
    {
      imageSrc: '../../../assets/images/still_life/avebury_grave_stone.jpg',
      imageAlt: '',
      ratio: Ratio.Portrait,
    },
    {
      imageSrc: '../../../assets/images/still_life/cogs_1.jpg',
      imageAlt: '',
      ratio: Ratio.Portrait,
    },
    {
      imageSrc: '../../../assets/images/still_life/cogs_2.jpg',
      imageAlt: '',
      ratio: Ratio.Portrait,
    },
    {
      imageSrc: '../../../assets/images/still_life/connected.jpg',
      imageAlt: '',
      ratio: Ratio.Landscape,
    },
    {
      imageSrc: '../../../assets/images/still_life/dragon_fly_macro.jpg',
      imageAlt: '',
      ratio: Ratio.Landscape,
    },
    {
      imageSrc: '../../../assets/images/still_life/dress_in_tree.jpg',
      imageAlt: '',
      ratio: Ratio.Landscape,
    },
    {
      imageSrc: '../../../assets/images/still_life/fence_swirls.jpg',
      imageAlt: '',
      ratio: Ratio.Portrait,
    },
    {
      imageSrc: '../../../assets/images/still_life/gardening_equipment.jpg',
      imageAlt: '',
      ratio: Ratio.Portrait,
    },
    {
      imageSrc: '../../../assets/images/still_life/glass_bottles.jpg',
      imageAlt: '',
      ratio: Ratio.Portrait,
    },
    {
      imageSrc: '../../../assets/images/still_life/heart_shaddow_ring.jpg',
      imageAlt: '',
      ratio: Ratio.Landscape,
    },
    {
      imageSrc: '../../../assets/images/still_life/oil_and_water_1.jpg',
      imageAlt: '',
      ratio: Ratio.Portrait,
    },
    {
      imageSrc: '../../../assets/images/still_life/oil_and_water_2.jpg',
      imageAlt: '',
      ratio: Ratio.Landscape,
    },
    {
      imageSrc: '../../../assets/images/still_life/oil_and_water_3.jpg',
      imageAlt: '',
      ratio: Ratio.Landscape,
    },
    {
      imageSrc: '../../../assets/images/still_life/old_books.jpg',
      imageAlt: '',
      ratio: Ratio.Landscape,
    },
    {
      imageSrc: '../../../assets/images/still_life/passport_and_travel.jpg',
      imageAlt: '',
      ratio: Ratio.Landscape,
    },
    {
      imageSrc: '../../../assets/images/still_life/pocket_watch_1.jpg',
      imageAlt: '',
      ratio: Ratio.Portrait,
    },
    {
      imageSrc: '../../../assets/images/still_life/pocket_watch_2.jpg',
      imageAlt: '',
      ratio: Ratio.Portrait,
    },
    {
      imageSrc: '../../../assets/images/still_life/rose.jpg',
      imageAlt: '',
      ratio: Ratio.Portrait,
    },
    {
      imageSrc: '../../../assets/images/still_life/rotting_apples.jpg',
      imageAlt: '',
      ratio: Ratio.Landscape,
    },
    {
      imageSrc: '../../../assets/images/still_life/shells.jpg',
      imageAlt: '',
      ratio: Ratio.Landscape,
    },
    {
      imageSrc: '../../../assets/images/still_life/stamp.jpg',
      imageAlt: '',
      ratio: Ratio.Portrait,
    },
    {
      imageSrc: '../../../assets/images/still_life/train_carriage.jpg',
      imageAlt: '',
      ratio: Ratio.Portrait,
    },
    {
      imageSrc: '../../../assets/images/still_life/tree_lights.jpg',
      imageAlt: '',
      ratio: Ratio.Portrait,
    },
    {
      imageSrc: '../../../assets/images/still_life/victory_tin.jpg',
      imageAlt: '',
      ratio: Ratio.Portrait,
    },
    {
      imageSrc: '../../../assets/images/still_life/warwick_camera.jpg',
      imageAlt: '',
      ratio: Ratio.Portrait,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
