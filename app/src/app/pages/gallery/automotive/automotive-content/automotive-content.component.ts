import { Component, OnInit } from '@angular/core';
import { ImageThumbnail } from 'src/app/image-thumbnail.model';

@Component({
  selector: 'automotive-content',
  templateUrl: './automotive-content.component.html',
  styleUrls: ['./automotive-content.component.css'],
})
export class AutomotiveContentComponent implements OnInit {
  carouselImages = [
    {
      imageSrc:
        '../../../assets/images/automotive/salon_prive_2021/bugatti_chiron_1.jpg',
      imageAlt: '',
    },
    {
      imageSrc:
        '../../../assets/images/automotive/salon_prive_2021/jaguar_e-type_3.jpg',
      imageAlt: '',
    },
    {
      imageSrc:
        '../../../assets/images/automotive/salon_prive_2021/lamborghini_huracan_sto_2.jpg',
      imageAlt: '',
    },
    {
      imageSrc:
        '../../../assets/images/automotive/salon_prive_2021/ferrari_f50_2.jpg',
      imageAlt: '',
    },
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

  galleryTitle = 'Automotive Galleries';

  galleryText = ['Some text about the automative galleries'];

  photoListImages: ImageThumbnail[] = [
    {
      imageSrc:
        '../../../../assets/images/automotive/salon_prive_2021/bugatti_chiron_1.jpg',
      labelText: 'Salon Privé 2021',
      galleryUrl: '/gallery/automotive/salon_prive_2021',
    },
    {
      imageSrc:
        '../../../../assets/images/automotive/ferrari_racing_days_2021/ferrari_fxxk_evo_red_2.jpg',
      labelText: 'Ferrari Racing Days 2021',
      galleryUrl: '/gallery/automotive/ferrari_racing_days_2021',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
