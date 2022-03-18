import { Component, OnInit } from '@angular/core';
import { Ratio } from 'src/app/common/ratio.enum';

@Component({
  selector: 'landscape-content',
  templateUrl: './landscape-content.component.html',
  styleUrls: ['./landscape-content.component.css'],
})
export class LandscapeContentComponent implements OnInit {
  carouselImages = [
    {
      imageSrc:
        '../../../assets/images/landscapes/star_trails_great_coxwell.jpg',
      imageAlt: '',
    },
    {
      imageSrc: '../../../assets/images/landscapes/snowdonia_2.jpg',
      imageAlt: '',
    },
    {
      imageSrc:
        '../../../assets/images/landscapes/car_light_trails_south_cerney.jpg',
      imageAlt: '',
    },
    {
      imageSrc: '../../../assets/images/landscapes/sunset_white_horse_hill.jpg',
      imageAlt: '',
    },
  ];

  galleryTitle = 'Landscape Gallery';

  galleryText = [
    'Here are a selection of some of my favourite landscape images, showcasing the different styles and techniques that I use in my work.',
    "Like many photographers, I started my photographic journey with landscape photography. From what was initially just 'point and shoot photography', I was able to experiment with a whole range of different styles and techniques at A-Level to create more unique and interesting images by using both Photoshop and In Camera techniques.",
    'In Photoshop, I was able to apply all sorts of weird and wonderful styles - from perfecting the visual qualities to cutting and rotating different areas of an image. I even experimented in creating images in the style of David Hockney Joiners, in which many images are taken and then stitched together to create the final picture.',
    'I preferred, however, experimenting with the different in camera techniques - in particular long exposure. I used long exposure to experiment with all sorts of different light sources: LEDs, EL Wire, car lights, and even the stars! The results I found to be fascinating.',
  ];

  allImages = [
    {
      imageSrc: '../../../assets/images/landscapes/abandoned_barn_1.jpg',
      imageAlt: '',
      ratio: Ratio.Landscape,
    },
    {
      imageSrc:
        '../../../assets/images/landscapes/abandoned_hotel_south_marston.jpg',
      imageAlt: '',
      ratio: Ratio.Landscape,
    },
    {
      imageSrc: '../../../assets/images/landscapes/avebury_stones_1.jpg',
      imageAlt: '',
      ratio: Ratio.Portrait,
    },
    {
      imageSrc: '../../../assets/images/landscapes/avebury_stones_2.jpg',
      imageAlt: '',
      ratio: Ratio.Landscape,
    },
    {
      imageSrc: '../../../assets/images/landscapes/avebury_stones_3.jpg',
      imageAlt: '',
      ratio: Ratio.Portrait,
    },
    {
      imageSrc: '../../../assets/images/landscapes/avebury_stones_4.jpg',
      imageAlt: '',
      ratio: Ratio.Landscape,
    },
    {
      imageSrc: '../../../assets/images/landscapes/avebury_stones_5.jpg',
      imageAlt: '',
      ratio: Ratio.Landscape,
    },
    {
      imageSrc:
        '../../../assets/images/travel/budapest/budapest_panorama_1.jpg',
      imageAlt: '',
      ratio: Ratio.Panorama,
    },
    {
      imageSrc:
        '../../../assets/images/landscapes/car_light_trails_cirencester.jpg',
      imageAlt: '',
      ratio: Ratio.Landscape,
    },
    {
      imageSrc:
        '../../../assets/images/landscapes/car_light_trails_south_cerney.jpg',
      imageAlt: '',
      ratio: Ratio.Landscape,
    },
    {
      imageSrc:
        '../../../assets/images/landscapes/clifton_suspension_bridge_panorama.jpg',
      imageAlt: '',
      ratio: Ratio.Panorama,
    },
    {
      imageSrc: '../../../assets/images/landscapes/coate_water_dock.jpg',
      imageAlt: '',
      ratio: Ratio.Landscape,
    },
    {
      imageSrc: '../../../assets/images/landscapes/coate_water.jpg',
      imageAlt: '',
      ratio: Ratio.Landscape,
    },
    {
      imageSrc:
        '../../../assets/images/landscapes/crystal_ball_coate_water.jpg',
      imageAlt: '',
      ratio: Ratio.Landscape,
    },
    {
      imageSrc: '../../../assets/images/landscapes/david_hockney_church.jpg',
      imageAlt: '',
      ratio: Ratio.Landscape,
    },
    {
      imageSrc: '../../../assets/images/landscapes/geometric_rotation.jpg',
      imageAlt: '',
      ratio: Ratio.Square,
    },
    {
      imageSrc: '../../../assets/images/landscapes/orb_and_el_wire.jpg',
      imageAlt: '',
      ratio: Ratio.Landscape,
    },
    {
      imageSrc: '../../../assets/images/landscapes/polaroid.jpg',
      imageAlt: '',
      ratio: Ratio.Landscape,
    },
    {
      imageSrc: '../../../assets/images/landscapes/snowdonia_1.jpg',
      imageAlt: '',
      ratio: Ratio.Portrait,
    },
    {
      imageSrc: '../../../assets/images/landscapes/snowdonia_2.jpg',
      imageAlt: '',
      ratio: Ratio.Landscape,
    },
    {
      imageSrc: '../../../assets/images/landscapes/snowdonia_3.jpg',
      imageAlt: '',
      ratio: Ratio.Landscape,
    },
    {
      imageSrc: '../../../assets/images/landscapes/snowflakes.jpg',
      imageAlt: '',
      ratio: Ratio.Landscape,
    },
    {
      imageSrc: '../../../assets/images/landscapes/spin.jpg',
      imageAlt: '',
      ratio: Ratio.Landscape,
    },
    {
      imageSrc: '../../../assets/images/landscapes/star_trails_fernham.jpg',
      imageAlt: '',
      ratio: Ratio.Landscape,
    },
    {
      imageSrc:
        '../../../assets/images/landscapes/star_trails_great_coxwell.jpg',
      imageAlt: '',
      ratio: Ratio.Landscape,
    },
    {
      imageSrc: '../../../assets/images/landscapes/star_trails_tree.jpg',
      imageAlt: '',
      ratio: Ratio.Landscape,
    },
    {
      imageSrc:
        '../../../assets/images/landscapes/star_trails_white_horse_hill.jpg',
      imageAlt: '',
      ratio: Ratio.Landscape,
    },
    {
      imageSrc: '../../../assets/images/landscapes/sunset_burial_ground.jpg',
      imageAlt: '',
      ratio: Ratio.Landscape,
    },
    {
      imageSrc: '../../../assets/images/landscapes/sunset_white_horse_hill.jpg',
      imageAlt: '',
      ratio: Ratio.Landscape,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
