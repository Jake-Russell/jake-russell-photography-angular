import { Component, OnInit } from '@angular/core';
import { Ratio } from 'src/app/common/ratio.enum';

@Component({
  selector: 'app-architecture-content',
  templateUrl: './architecture-content.component.html',
  styleUrls: ['./architecture-content.component.css'],
})
export class ArchitectureContentComponent implements OnInit {
  carouselImages = [
    {
      imageSrc: '../../../../../assets/images/architecture/fence_swirls.jpg',
      imageAlt: '',
    },
    {
      imageSrc:
        '../../../../../assets/images/architecture/budapest_suburbs.jpg',
      imageAlt: '',
    },
    {
      imageSrc: '../../../../../assets/images/architecture/cabot_circus_1.jpg',
      imageAlt: '',
    },
    {
      imageSrc:
        '../../../../../assets/images/architecture/wire_wool_abandoned_hotel_2.jpg',
      imageAlt: '',
    },
  ];

  galleryTitle = 'Architecture Gallery';

  galleryText = [
    "I've chosen a selection of some of my favourite architecture images, both black and white and colour, incorporating a range of different photographic techniques and styles.",
    'Architectural photography is an area that fascinates me. I find that it allows for an enormous range of creativity, experimenting with different camera angles, apertures, and shutter speeds to achieve all sorts of different results. I like the candid nature of this type of photography too, and enjoy capturing the world as it is in that moment.',
    "Through architectural photography, I found a love for experimentation with 'Wire Wool Photography'. This involves setting light to wire wool and spinning it, whilst shooting on a long exposure. I experimented with this in a range of different locations, and found the best results were in enclosed spaces, where the sparks could bounce off in all different directions.",
    'I also found a love for black and white photography, capturing minimalistic yet appealing images. I believe black and white photography goes hand in hand with architectural photography, and together they can create focussed and artistic imagery.',
  ];

  allImages = [
    {
      imageSrc:
        '../../../../../assets/images/architecture/avebury_grave_stone.jpg',
      imageAlt: '',
      ratio: Ratio.Portrait,
    },
    {
      imageSrc: '../../../../../assets/images/architecture/brunel_car_park.jpg',
      imageAlt: '',
      ratio: Ratio.Portrait,
    },
    {
      imageSrc:
        '../../../../../assets/images/architecture/budapest_streets.jpg',
      imageAlt: '',
      ratio: Ratio.Portrait,
    },
    {
      imageSrc:
        '../../../../../assets/images/architecture/budapest_suburbs.jpg',
      imageAlt: '',
      ratio: Ratio.Portrait,
    },
    {
      imageSrc: '../../../../../assets/images/architecture/cabot_circus_1.jpg',
      imageAlt: '',
      ratio: Ratio.Portrait,
    },
    {
      imageSrc: '../../../../../assets/images/architecture/cabot_circus_2.jpg',
      imageAlt: '',
      ratio: Ratio.Portrait,
    },
    {
      imageSrc: '../../../../../assets/images/architecture/cabot_circus_3.jpg',
      imageAlt: '',
      ratio: Ratio.Portrait,
    },
    {
      imageSrc:
        '../../../../../assets/images/architecture/coate_water_diving_board.jpg',
      imageAlt: '',
      ratio: Ratio.Portrait,
    },
    {
      imageSrc:
        '../../../../../assets/images/architecture/fairy_lights_abandoned_hotel.jpg',
      imageAlt: '',
      ratio: Ratio.Landscape,
    },
    {
      imageSrc: '../../../../../assets/images/architecture/fence_swirls.jpg',
      imageAlt: '',
      ratio: Ratio.Portrait,
    },
    {
      imageSrc: '../../../../../assets/images/architecture/lacock_abbey_1.jpg',
      imageAlt: '',
      ratio: Ratio.Landscape,
    },
    {
      imageSrc: '../../../../../assets/images/architecture/lacock_abbey_2.jpg',
      imageAlt: '',
      ratio: Ratio.Portrait,
    },
    {
      imageSrc: '../../../../../assets/images/architecture/lacock_abbey_3.jpg',
      imageAlt: '',
      ratio: Ratio.Portrait,
    },
    {
      imageSrc: '../../../../../assets/images/architecture/lacock_abbey_4.jpg',
      imageAlt: '',
      ratio: Ratio.Landscape,
    },
    {
      imageSrc:
        '../../../../../assets/images/architecture/lacock_abbey_cauldren.jpg',
      imageAlt: '',
      ratio: Ratio.Portrait,
    },
    {
      imageSrc: '../../../../../assets/images/architecture/mirrored_bridge.jpg',
      imageAlt: '',
      ratio: Ratio.Landscape,
    },
    {
      imageSrc: '../../../../../assets/images/architecture/no_parking.jpg',
      imageAlt: '',
      ratio: Ratio.Landscape,
    },
    {
      imageSrc: '../../../../../assets/images/architecture/swindon_tower.jpg',
      imageAlt: '',
      ratio: Ratio.Portrait,
    },
    {
      imageSrc:
        '../../../../../assets/images/architecture/town_gardens_pavillion.jpg',
      imageAlt: '',
      ratio: Ratio.Landscape,
    },
    {
      imageSrc:
        '../../../../../assets/images/architecture/wire_wool_abandoned_hotel_1.jpg',
      imageAlt: '',
      ratio: Ratio.Landscape,
    },
    {
      imageSrc:
        '../../../../../assets/images/architecture/wire_wool_abandoned_hotel_2.jpg',
      imageAlt: '',
      ratio: Ratio.Landscape,
    },
    {
      imageSrc:
        '../../../../../assets/images/architecture/wire_wool_abandoned_hotel_3.jpg',
      imageAlt: '',
      ratio: Ratio.Landscape,
    },
    {
      imageSrc:
        '../../../../../assets/images/architecture/wire_wool_abandoned_hotel_4.jpg',
      imageAlt: '',
      ratio: Ratio.Landscape,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
