import { Component, OnInit } from '@angular/core';
import { Ratio } from 'src/app/common/ratio.enum';

@Component({
  selector: 'app-ferrari-racing-days2021-content',
  templateUrl: './ferrari-racing-days2021-content.component.html',
  styleUrls: ['./ferrari-racing-days2021-content.component.css'],
})
export class FerrariRacingDays2021ContentComponent implements OnInit {
  carouselImages = [
    {
      imageSrc:
        '../../../assets/images/automotive/ferrari_racing_days_2021/ferrari_fxxk_evo_red_2.jpg',
      imageAlt: '',
    },
    {
      imageSrc:
        '../../../assets/images/automotive/ferrari_racing_days_2021/ferrari_296_gtb_2.jpg',
      imageAlt: '',
    },
    {
      imageSrc:
        '../../../assets/images/automotive/ferrari_racing_days_2021/ferrari_monza_sp2_5.jpg',
      imageAlt: '',
    },
    {
      imageSrc:
        '../../../assets/images/automotive/ferrari_racing_days_2021/ferrari_488_pista_blue.jpg',
      imageAlt: '',
    },
  ];

  galleryTitle = 'Silverstone Ferrari Racing Days 2021 Gallery';

  galleryText = ['Some text about Silverstone Ferrari Racing Days 2021'];

  allImages = [
    {
      imageSrc:
        '../../../assets/images/automotive/ferrari_racing_days_2021/ferrari_fxxk_evo_blue_1.jpg',
      imageAlt: '',
      ratio: Ratio.Portrait,
    },
    {
      imageSrc:
        '../../../assets/images/automotive/ferrari_racing_days_2021/ferrari_599xx_evo_blue.jpg',
      imageAlt: '',
      ratio: Ratio.Portrait,
    },
    {
      imageSrc:
        '../../../assets/images/automotive/ferrari_racing_days_2021/ferrari_599xx_evo_red_1.jpg',
      imageAlt: '',
      ratio: Ratio.Portrait,
    },
    {
      imageSrc:
        '../../../assets/images/automotive/ferrari_racing_days_2021/ferrari_fxxk_evo_red_1.jpg',
      imageAlt: '',
      ratio: Ratio.Square,
    },
    {
      imageSrc:
        '../../../assets/images/automotive/ferrari_racing_days_2021/ferrari_fxxk_evo_red_2.jpg',
      imageAlt: '',
      ratio: Ratio.Portrait,
    },
    {
      imageSrc:
        '../../../assets/images/automotive/ferrari_racing_days_2021/ferrari_fxxk_evo_white_1.jpg',
      imageAlt: '',
      ratio: Ratio.Portrait,
    },
    {
      imageSrc:
        '../../../assets/images/automotive/ferrari_racing_days_2021/ferrari_f40_1.jpg',
      imageAlt: '',
      ratio: Ratio.Portrait,
    },
    {
      imageSrc:
        '../../../assets/images/automotive/ferrari_racing_days_2021/ferrari_f40_2.jpg',
      imageAlt: '',
      ratio: Ratio.Portrait,
    },
    {
      imageSrc:
        '../../../assets/images/automotive/ferrari_racing_days_2021/ferrari_f40_3.jpg',
      imageAlt: '',
      ratio: Ratio.Portrait,
    },
    {
      imageSrc:
        '../../../assets/images/automotive/ferrari_racing_days_2021/ferrari_sf90_grey_1.jpg',
      imageAlt: '',
      ratio: Ratio.Landscape,
    },
    {
      imageSrc:
        '../../../assets/images/automotive/ferrari_racing_days_2021/ferrari_sf90_grey_2.jpg',
      imageAlt: '',
      ratio: Ratio.Portrait,
    },
    {
      imageSrc:
        '../../../assets/images/automotive/ferrari_racing_days_2021/ferrari_296_gtb_3.jpg',
      imageAlt: '',
      ratio: Ratio.Portrait,
    },
    {
      imageSrc:
        '../../../assets/images/automotive/ferrari_racing_days_2021/ferrari_296_gtb_1.jpg',
      imageAlt: '',
      ratio: Ratio.Portrait,
    },
    {
      imageSrc:
        '../../../assets/images/automotive/ferrari_racing_days_2021/ferrari_296_gtb_4.jpg',
      imageAlt: '',
      ratio: Ratio.Portrait,
    },
    {
      imageSrc:
        '../../../assets/images/automotive/ferrari_racing_days_2021/ferrari_296_gtb_2.jpg',
      imageAlt: '',
      ratio: Ratio.Portrait,
    },
    {
      imageSrc:
        '../../../assets/images/automotive/ferrari_racing_days_2021/ferrari_599xx_evo_red_2.jpg',
      imageAlt: '',
      ratio: Ratio.Landscape,
    },
    {
      imageSrc:
        '../../../assets/images/automotive/ferrari_racing_days_2021/ferrari_599xx_evo_grey_1.jpg',
      imageAlt: '',
      ratio: Ratio.Landscape,
    },
    {
      imageSrc:
        '../../../assets/images/automotive/ferrari_racing_days_2021/ferrari_599xx_evo_grey_2.jpg',
      imageAlt: '',
      ratio: Ratio.Landscape,
    },
    {
      imageSrc:
        '../../../assets/images/automotive/ferrari_racing_days_2021/ferrari_fxxk_evo_blue_2.jpg',
      imageAlt: '',
      ratio: Ratio.Landscape,
    },
    {
      imageSrc:
        '../../../assets/images/automotive/ferrari_racing_days_2021/ferrari_fxxk_evo_white_2.jpg',
      imageAlt: '',
      ratio: Ratio.Landscape,
    },
    {
      imageSrc:
        '../../../assets/images/automotive/ferrari_racing_days_2021/ferrari_fxxk_evo_red_4.jpg',
      imageAlt: '',
      ratio: Ratio.Landscape,
    },
    {
      imageSrc:
        '../../../assets/images/automotive/ferrari_racing_days_2021/ferrari_fxxk_evo_white_3.jpg',
      imageAlt: '',
      ratio: Ratio.Landscape,
    },
    {
      imageSrc:
        '../../../assets/images/automotive/ferrari_racing_days_2021/ferrari_599xx_evo_black.jpg',
      imageAlt: '',
      ratio: Ratio.Landscape,
    },
    {
      imageSrc:
        '../../../assets/images/automotive/ferrari_racing_days_2021/ferrari_fxxk_evo_yellow_1.jpg',
      imageAlt: '',
      ratio: Ratio.Landscape,
    },
    {
      imageSrc:
        '../../../assets/images/automotive/ferrari_racing_days_2021/ferrari_fxxk_evo_yellow_2.jpg',
      imageAlt: '',
      ratio: Ratio.Square,
    },
    {
      imageSrc:
        '../../../assets/images/automotive/ferrari_racing_days_2021/ferrari_monza_sp2_1.jpg',
      imageAlt: '',
      ratio: Ratio.Portrait,
    },
    {
      imageSrc:
        '../../../assets/images/automotive/ferrari_racing_days_2021/ferrari_monza_sp2_5.jpg',
      imageAlt: '',
      ratio: Ratio.Portrait,
    },
    {
      imageSrc:
        '../../../assets/images/automotive/ferrari_racing_days_2021/ferrari_monza_sp1_1.jpg',
      imageAlt: '',
      ratio: Ratio.Portrait,
    },
    {
      imageSrc:
        '../../../assets/images/automotive/ferrari_racing_days_2021/ferrari_monza_sp1_2.jpg',
      imageAlt: '',
      ratio: Ratio.Portrait,
    },
    {
      imageSrc:
        '../../../assets/images/automotive/ferrari_racing_days_2021/ferrari_monza_sp2_2.jpg',
      imageAlt: '',
      ratio: Ratio.Portrait,
    },
    {
      imageSrc:
        '../../../assets/images/automotive/ferrari_racing_days_2021/ferrari_monza_sp2_3.jpg',
      imageAlt: '',
      ratio: Ratio.Portrait,
    },
    {
      imageSrc:
        '../../../assets/images/automotive/ferrari_racing_days_2021/ferrari_monza_sp2_4.jpg',
      imageAlt: '',
      ratio: Ratio.Portrait,
    },
    {
      imageSrc:
        '../../../assets/images/automotive/ferrari_racing_days_2021/ferrari_sp3jc_1.jpg',
      imageAlt: '',
      ratio: Ratio.Landscape,
    },
    {
      imageSrc:
        '../../../assets/images/automotive/ferrari_racing_days_2021/ferrari_sp3jc_2.jpg',
      imageAlt: '',
      ratio: Ratio.Square,
    },
    {
      imageSrc:
        '../../../assets/images/automotive/ferrari_racing_days_2021/ferrari_sp3jc_3.jpg',
      imageAlt: '',
      ratio: Ratio.Square,
    },
    {
      imageSrc:
        '../../../assets/images/automotive/ferrari_racing_days_2021/ferrari_laferrari_1.jpg',
      imageAlt: '',
      ratio: Ratio.Portrait,
    },
    {
      imageSrc:
        '../../../assets/images/automotive/ferrari_racing_days_2021/ferrari_laferrari_2.jpg',
      imageAlt: '',
      ratio: Ratio.Portrait,
    },
    {
      imageSrc:
        '../../../assets/images/automotive/ferrari_racing_days_2021/ferrari_laferrari_3.jpg',
      imageAlt: '',
      ratio: Ratio.Portrait,
    },
    {
      imageSrc:
        '../../../assets/images/automotive/ferrari_racing_days_2021/ferrari_laferrari_4.jpg',
      imageAlt: '',
      ratio: Ratio.Portrait,
    },
    {
      imageSrc:
        '../../../assets/images/automotive/ferrari_racing_days_2021/ferrari_488_pista_blue.jpg',
      imageAlt: '',
      ratio: Ratio.Portrait,
    },
    {
      imageSrc:
        '../../../assets/images/automotive/ferrari_racing_days_2021/ferrari_f12tdf.jpg',
      imageAlt: '',
      ratio: Ratio.Portrait,
    },
    {
      imageSrc:
        '../../../assets/images/automotive/ferrari_racing_days_2021/ferrari_488_pista_white.jpg',
      imageAlt: '',
      ratio: Ratio.Portrait,
    },
    {
      imageSrc:
        '../../../assets/images/automotive/ferrari_racing_days_2021/ferrari_roma.jpg',
      imageAlt: '',
      ratio: Ratio.Portrait,
    },
    {
      imageSrc:
        '../../../assets/images/automotive/ferrari_racing_days_2021/ferrari_f355_berlinetta.jpg',
      imageAlt: '',
      ratio: Ratio.Portrait,
    },
    {
      imageSrc:
        '../../../assets/images/automotive/ferrari_racing_days_2021/ferrari_488_gt3_1.jpg',
      imageAlt: '',
      ratio: Ratio.Landscape,
    },
    {
      imageSrc:
        '../../../assets/images/automotive/ferrari_racing_days_2021/ferrari_488_gt3_2.jpg',
      imageAlt: '',
      ratio: Ratio.Landscape,
    },
    {
      imageSrc:
        '../../../assets/images/automotive/ferrari_racing_days_2021/ferrari_488_gt3_3.jpg',
      imageAlt: '',
      ratio: Ratio.Landscape,
    },
    {
      imageSrc:
        '../../../assets/images/automotive/ferrari_racing_days_2021/ferrari_488_gt3_4.jpg',
      imageAlt: '',
      ratio: Ratio.Landscape,
    },
    {
      imageSrc:
        '../../../assets/images/automotive/ferrari_racing_days_2021/ferrari_fxxk_evo_white_4.jpg',
      imageAlt: '',
      ratio: Ratio.Landscape,
    },
    {
      imageSrc:
        '../../../assets/images/automotive/ferrari_racing_days_2021/ferrari_fxxk_evo_red_3.jpg',
      imageAlt: '',
      ratio: Ratio.Landscape,
    },
    {
      imageSrc:
        '../../../assets/images/automotive/ferrari_racing_days_2021/ferrari_599xx_evo_grey_3.jpg',
      imageAlt: '',
      ratio: Ratio.Landscape,
    },
    {
      imageSrc:
        '../../../assets/images/automotive/ferrari_racing_days_2021/ferrari_fxxk_evo_yellow_3.jpg',
      imageAlt: '',
      ratio: Ratio.Square,
    },
    {
      imageSrc:
        '../../../assets/images/automotive/ferrari_racing_days_2021/ferrari_599xx_evo_grey_4.jpg',
      imageAlt: '',
      ratio: Ratio.Landscape,
    },
    {
      imageSrc:
        '../../../assets/images/automotive/ferrari_racing_days_2021/ferrari_sf90_red.jpg',
      imageAlt: '',
      ratio: Ratio.Portrait,
    },
    {
      imageSrc:
        '../../../assets/images/automotive/ferrari_racing_days_2021/ferrari_812_competizione.jpg',
      imageAlt: '',
      ratio: Ratio.Portrait,
    },
    {
      imageSrc:
        '../../../assets/images/automotive/ferrari_racing_days_2021/ferrari_laferrari_prototype.jpg',
      imageAlt: '',
      ratio: Ratio.Portrait,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
