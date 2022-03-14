import { Component, OnInit } from '@angular/core';
import { Ratio } from 'src/app/common/ratio.enum';

@Component({
  selector: 'still-life-content',
  templateUrl: './still-life-content.component.html',
  styleUrls: ['./still-life-content.component.css'],
})
export class StillLifeContentComponent implements OnInit {
  carouselImages = [
    {
      imageSrc: '../../../assets/images/still_life/pocket_watch_1.jpg',
      imageAlt: '',
    },
    {
      imageSrc: '../../../assets/images/still_life/victory_tin.jpg',
      imageAlt: '',
    },
    {
      imageSrc: '../../../assets/images/still_life/warwick_camera.jpg',
      imageAlt: '',
    },
    {
      imageSrc: '../../../assets/images/still_life/cogs_1.jpg',
      imageAlt: '',
    },
  ];

  galleryTitle = 'Still Life Gallery';

  galleryText = [
    'Here are a selection of some of my favourite still life images, demonstrating the different styles and techniques that I use in my work.',
    "Still life photography is one of my favourite areas of photography. I enjoy the setup required for these kind of images, taking into consideration all sorts of different creative elements to enhance and perfect an image. Unlike portrait images, still life objects don't move - making the setup a lot easier!",
    'At A-Level I was able to experiment with a range of different photographic techniques, and apply these to all sorts of still life objects. From shells, to roses, to old tins, I was able to create well balanced images from a range of different objects found in and around the house.',
    'I also enjoyed experimenting with depth of field to create different effects. Using a 50mm lens, I was able to achieve an extremely shallow depth of field, helping me to create unique and interesting images that lead the viewer in.',
    'As well as in camera experimentation, I also trialled different Photoshop techniques. This included levels adjustments to create more well-balanced images, and image stacking to apply weird and wonderful effects!',
  ];

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
