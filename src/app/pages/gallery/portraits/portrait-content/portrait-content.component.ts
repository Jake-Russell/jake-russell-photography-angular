import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portrait-content',
  templateUrl: './portrait-content.component.html',
  styleUrls: ['./portrait-content.component.css'],
})
export class PortraitContentComponent implements OnInit {
  carouselImages = [
    {
      imageSrc: '../../../../../assets/images/portraits/chloe_1.jpg',
      imageAlt: 'Chloe 1',
    },
    {
      imageSrc: '../../../../../assets/images/portraits/nan.jpg',
      imageAlt: 'Nan',
    },
    {
      imageSrc: '../../../../../assets/images/portraits/grandad_1.jpg',
      imageAlt: 'Grandad 1',
    },
    {
      imageSrc: '../../../../../assets/images/portraits/overlay.jpg',
      imageAlt: 'Overlay',
    },
  ];

  galleryTitle = 'Portrait Gallery';

  galleryText = [
    "I've chosen a selection of some of my favourite portrait images, showcasing the different styles and techniques that I use in my work.",
    'Having never experimented with unique portrait styles before studying A-Level Photography, I was really able to explore and develop different creative concepts and ideas.',
    'In my first year, we used only film cameras, meaning that the different techniques I used had to be implemented either in camera, or in post production in the darkroom.',
    "Using in camera techniques, I was able to experiment with different shutter speeds and apertures to achieve unique creative effects. In the darkroom I was also able to apply creative techniques such as 'dodging' and 'burning' to lighten and darken specific areas, helping to create a well balanced image.",
    'In my second year, we were able to use digial cameras too. This allowed me to really experiment with different ideas, without the worry of running out of film! It also allowed me to fully utilise the power of Photoshop to edit, manipulate, and perfect my work.',
    'I really enjoy portrait photography, capturing the different empotions and characteristics of a person in one still image. I was able to learn a lot about directional skills, and also about lighting, allowing me to achieve different effects with different lighting setups.',
  ];

  allImages = [
    {
      imageSrc: '../../../../../assets/images/portraits/bin_bag_tie.jpg',
      imageAlt: '',
    },
    {
      imageSrc: '../../../../../assets/images/portraits/chloe_1.jpg',
      imageAlt: '',
    },
    {
      imageSrc: '../../../../../assets/images/portraits/chloe_2.jpg',
      imageAlt: '',
    },
    {
      imageSrc: '../../../../../assets/images/portraits/chloe_3.jpg',
      imageAlt: '',
    },
    {
      imageSrc: '../../../../../assets/images/portraits/chloe_4.jpg',
      imageAlt: '',
    },
    {
      imageSrc: '../../../../../assets/images/portraits/chloe_paper.jpg',
      imageAlt: '',
    },
    {
      imageSrc: '../../../../../assets/images/portraits/chloe_sunflowers.jpg',
      imageAlt: '',
    },
    {
      imageSrc: '../../../../../assets/images/portraits/chloe_tv_sea.jpg',
      imageAlt: '',
    },
    {
      imageSrc: '../../../../../assets/images/portraits/cigarette.jpg',
      imageAlt: '',
      landscape: true,
    },
    {
      imageSrc: '../../../../../assets/images/portraits/dad_on_chair.jpg',
      imageAlt: '',
    },
    {
      imageSrc: '../../../../../assets/images/portraits/el_wire_sam.jpg',
      imageAlt: '',
      landscape: true,
    },
    {
      imageSrc: '../../../../../assets/images/portraits/el_wire.jpg',
      imageAlt: '',
    },
    {
      imageSrc: '../../../../../assets/images/portraits/ghost.jpg',
      imageAlt: '',
    },
    {
      imageSrc: '../../../../../assets/images/portraits/grandad_1.jpg',
      imageAlt: '',
    },
    {
      imageSrc: '../../../../../assets/images/portraits/grandad_2.jpg',
      imageAlt: '',
    },
    {
      imageSrc: '../../../../../assets/images/portraits/light_up_mask.jpg',
      imageAlt: '',
    },
    {
      imageSrc: '../../../../../assets/images/portraits/nan.jpg',
      imageAlt: '',
    },
    {
      imageSrc: '../../../../../assets/images/portraits/overlay.jpg',
      imageAlt: '',
    },
    {
      imageSrc: '../../../../../assets/images/portraits/phone_box.jpg',
      imageAlt: '',
    },
    {
      imageSrc: '../../../../../assets/images/portraits/polaroid.jpg',
      imageAlt: '',
    },
    {
      imageSrc:
        '../../../../../assets/images/portraits/red_balloon_by_lamp_post.jpg',
      imageAlt: '',
    },
    {
      imageSrc:
        '../../../../../assets/images/portraits/red_balloon_in_graveyard.jpg',
      imageAlt: '',
    },
    {
      imageSrc:
        '../../../../../assets/images/portraits/red_balloon_in_wheel_barrow.jpg',
      imageAlt: '',
    },
    {
      imageSrc:
        '../../../../../assets/images/portraits/red_balloon_on_bench.jpg',
      imageAlt: '',
    },
    {
      imageSrc:
        '../../../../../assets/images/portraits/red_balloon_on_chair.jpg',
      imageAlt: '',
    },
    {
      imageSrc: '../../../../../assets/images/portraits/reflection.jpg',
      imageAlt: '',
    },
    {
      imageSrc: '../../../../../assets/images/portraits/repeated_hands.jpg',
      imageAlt: '',
    },
    {
      imageSrc: '../../../../../assets/images/portraits/sam_1.jpg',
      imageAlt: '',
    },
    {
      imageSrc: '../../../../../assets/images/portraits/scream.jpg',
      imageAlt: '',
    },
    {
      imageSrc: '../../../../../assets/images/portraits/slice.jpg',
      imageAlt: '',
    },
    {
      imageSrc: '../../../../../assets/images/portraits/steel_wool_chloe.jpg',
      imageAlt: '',
    },
    {
      imageSrc: '../../../../../assets/images/portraits/tree_overlay.jpg',
      imageAlt: '',
    },
    {
      imageSrc: '../../../../../assets/images/portraits/tunnel_facing_away.jpg',
      imageAlt: '',
    },
    {
      imageSrc:
        '../../../../../assets/images/portraits/tunnel_facing_forwards.jpg',
      imageAlt: '',
    },
    {
      imageSrc: '../../../../../assets/images/portraits/vertical_slice.jpg',
      imageAlt: '',
    },
    {
      imageSrc: '../../../../../assets/images/portraits/viki_and_charlie.jpg',
      imageAlt: '',
    },
    {
      imageSrc: '../../../../../assets/images/portraits/viki_blue_light.jpg',
      imageAlt: '',
    },
    {
      imageSrc: '../../../../../assets/images/portraits/viki_pink_wire.jpg',
      imageAlt: '',
    },
    {
      imageSrc: '../../../../../assets/images/portraits/viki_pool.jpg',
      imageAlt: '',
    },
    {
      imageSrc: '../../../../../assets/images/portraits/weathered_hands.jpg',
      imageAlt: '',
    },
  ];
  constructor() {}

  ngOnInit() {}
}
