import { Component, OnInit } from '@angular/core';
import { ImageThumbnail } from 'src/app/image-thumbnail.model';

@Component({
  selector: 'automotive-content',
  templateUrl: './automotive-content.component.html',
  styleUrls: ['./automotive-content.component.css'],
})
export class AutomotiveContentComponent implements OnInit {
  photoListImages: ImageThumbnail[] = [
    {
      imageSrc:
        '../../../../assets/images/automotive/salon_prive_2021/bugatti_chiron_1.jpg',
      labelText:
        'Salon Privé 2021',
      galleryUrl: '/gallery/automotive/salon_prive_2021',
    },
    {
      imageSrc:
        '../../../../assets/images/automotive/ferrari_racing_days_2021/ferrari_fxxk_evo_red_2.jpg',
      labelText:
        'Ferrari Racing Days 2021',
      galleryUrl: '/gallery/automotive/ferrari_racing_days_2021',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
