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
  ];

  galleryTitle = 'Silverstone Ferrari Racing Days 2021 Gallery';

  galleryText = ['Some text about Silverstone Ferrari Racing Days 2021'];

  allImages = [
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
        '../../../assets/images/automotive/ferrari_racing_days_2021/ferrari_fxxk_evo_red_3.jpg',
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
  ];

  constructor() {}

  ngOnInit(): void {}
}
