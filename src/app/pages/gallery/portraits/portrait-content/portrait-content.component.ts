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
      imageSrc: '../../../../../assets/images/portraits/red_balloon_by_lamp_post.jpg',
      imageAlt: '',
    },
    {
      imageSrc: '../../../../../assets/images/portraits/red_balloon_in_graveyard.jpg',
      imageAlt: '',
    },
    {
      imageSrc: '../../../../../assets/images/portraits/red_balloon_in_wheel_barrow.jpg',
      imageAlt: '',
    },
    {
      imageSrc: '../../../../../assets/images/portraits/red_balloon_on_bench.jpg',
      imageAlt: '',
    },
    {
      imageSrc: '../../../../../assets/images/portraits/red_balloon_on_chair.jpg',
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
      imageSrc: '../../../../../assets/images/portraits/tunnel_facing_forwards.jpg',
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
