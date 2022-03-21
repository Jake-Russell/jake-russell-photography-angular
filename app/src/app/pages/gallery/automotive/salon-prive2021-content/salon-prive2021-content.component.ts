import { Component, OnInit } from '@angular/core';
import { Ratio } from 'src/app/common/ratio.enum';

@Component({
  selector: 'salon-prive2021-content',
  templateUrl: './salon-prive2021-content.component.html',
  styleUrls: ['./salon-prive2021-content.component.css'],
})
export class SalonPrive2021ContentComponent implements OnInit {
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
  ];

  galleryTitle = 'Salon Privé 2021 Gallery';

  galleryText = ['Some text about Salon Privé 2021'];

  allImages = [
    {
      imageSrc:
        '../../../assets/images/automotive/salon_prive_2021/automobil_pininfarina_battista_anniversario_1.jpg',
      imageAlt: '',
      ratio: Ratio.Landscape,
    },
    {
      imageSrc:
        '../../../assets/images/automotive/salon_prive_2021/automobil_pininfarina_battista_anniversario_2.jpg',
      imageAlt: '',
      ratio: Ratio.Landscape,
    },
    {
      imageSrc:
        '../../../assets/images/automotive/salon_prive_2021/automobil_pininfarina_battista_anniversario_3.jpg',
      imageAlt: '',
      ratio: Ratio.Landscape,
    },
    {
      imageSrc:
        '../../../assets/images/automotive/salon_prive_2021/bugatti_chiron_1.jpg',
      imageAlt: '',
      ratio: Ratio.Portrait,
    },
    {
      imageSrc:
        '../../../assets/images/automotive/salon_prive_2021/bugatti_chiron_2.jpg',
      imageAlt: '',
      ratio: Ratio.Portrait,
    },
    {
      imageSrc:
        '../../../assets/images/automotive/salon_prive_2021/bugatti_chiron_3.jpg',
      imageAlt: '',
      ratio: Ratio.Portrait,
    },

    {
      imageSrc:
        '../../../assets/images/automotive/salon_prive_2021/bugatti_chiron_supersport_1.jpg',
      imageAlt: '',
      ratio: Ratio.Landscape,
    },
    {
      imageSrc:
        '../../../assets/images/automotive/salon_prive_2021/bugatti_chiron_supersport_2.jpg',
      imageAlt: '',
      ratio: Ratio.Portrait,
    },
    {
      imageSrc:
        '../../../assets/images/automotive/salon_prive_2021/bugatti_chiron_supersport_3.jpg',
      imageAlt: '',
      ratio: Ratio.Landscape,
    },
    {
      imageSrc:
        '../../../assets/images/automotive/salon_prive_2021/bugatti_chiron_supersport_4.jpg',
      imageAlt: '',
      ratio: Ratio.Portrait,
    },
    {
      imageSrc:
        '../../../assets/images/automotive/salon_prive_2021/bugatti_chiron_supersport_5.jpg',
      imageAlt: '',
      ratio: Ratio.Landscape,
    },
    {
      imageSrc:
        '../../../assets/images/automotive/salon_prive_2021/ferrari_275_gtb_competizione.jpg',
      imageAlt: '',
      ratio: Ratio.Portrait,
    },
    {
      imageSrc:
        '../../../assets/images/automotive/salon_prive_2021/ferrari_488_pista_blue.jpg',
      imageAlt: '',
      ratio: Ratio.Portrait,
    },
    {
      imageSrc:
        '../../../assets/images/automotive/salon_prive_2021/ferrari_488_pista_red.jpg',
      imageAlt: '',
      ratio: Ratio.Portrait,
    },
    {
      imageSrc:
        '../../../assets/images/automotive/salon_prive_2021/ferrari_display.jpg',
      imageAlt: '',
      ratio: Ratio.Portrait,
    },
    {
      imageSrc:
        '../../../assets/images/automotive/salon_prive_2021/ferrari_enzo.jpg',
      imageAlt: '',
      ratio: Ratio.Portrait,
    },
    {
      imageSrc:
        '../../../assets/images/automotive/salon_prive_2021/ferrari_f12_tdf_blue_1.jpg',
      imageAlt: '',
      ratio: Ratio.Landscape,
    },
    {
      imageSrc:
        '../../../assets/images/automotive/salon_prive_2021/ferrari_f12_tdf_blue_2.jpg',
      imageAlt: '',
      ratio: Ratio.Portrait,
    },
    {
      imageSrc:
        '../../../assets/images/automotive/salon_prive_2021/ferrari_f12_tdf_red.jpg',
      imageAlt: '',
      ratio: Ratio.Portrait,
    },
    {
      imageSrc:
        '../../../assets/images/automotive/salon_prive_2021/ferrari_f50_1.jpg',
      imageAlt: '',
      ratio: Ratio.Portrait,
    },
    {
      imageSrc:
        '../../../assets/images/automotive/salon_prive_2021/ferrari_f50_2.jpg',
      imageAlt: '',
      ratio: Ratio.Portrait,
    },
    {
      imageSrc:
        '../../../assets/images/automotive/salon_prive_2021/ferrari_sf90_stradale.jpg',
      imageAlt: '',
      ratio: Ratio.Landscape,
    },
    {
      imageSrc:
        '../../../assets/images/automotive/salon_prive_2021/ford_gt_black.jpg',
      imageAlt: '',
      ratio: Ratio.Square,
    },
    {
      imageSrc:
        '../../../assets/images/automotive/salon_prive_2021/ford_gt_blue.jpg',
      imageAlt: '',
      ratio: Ratio.Square,
    },
    {
      imageSrc:
        '../../../assets/images/automotive/salon_prive_2021/jaguar_e-type_1.jpg',
      imageAlt: '',
      ratio: Ratio.Portrait,
    },
    {
      imageSrc:
        '../../../assets/images/automotive/salon_prive_2021/jaguar_e-type_2.jpg',
      imageAlt: '',
      ratio: Ratio.Portrait,
    },
    {
      imageSrc:
        '../../../assets/images/automotive/salon_prive_2021/jaguar_e-type_3.jpg',
      imageAlt: '',
      ratio: Ratio.Portrait,
    },
    {
      imageSrc:
        '../../../assets/images/automotive/salon_prive_2021/lamborghini_huracan_performante_blue_1.jpg',
      imageAlt: '',
      ratio: Ratio.Landscape,
    },
    {
      imageSrc:
        '../../../assets/images/automotive/salon_prive_2021/lamborghini_huracan_performante_blue_2.jpg',
      imageAlt: '',
      ratio: Ratio.Landscape,
    },
    {
      imageSrc:
        '../../../assets/images/automotive/salon_prive_2021/lamborghini_huracan_performante_orange.jpg',
      imageAlt: '',
      ratio: Ratio.Landscape,
    },
    {
      imageSrc:
        '../../../assets/images/automotive/salon_prive_2021/lamborghini_huracan_sto_1.jpg',
      imageAlt: '',
      ratio: Ratio.Portrait,
    },
    {
      imageSrc:
        '../../../assets/images/automotive/salon_prive_2021/lamborghini_huracan_sto_2.jpg',
      imageAlt: '',
      ratio: Ratio.Portrait,
    },
    {
      imageSrc:
        '../../../assets/images/automotive/salon_prive_2021/lamborghini_huracan_sto_3.jpg',
      imageAlt: '',
      ratio: Ratio.Portrait,
    },
    {
      imageSrc:
        '../../../assets/images/automotive/salon_prive_2021/lamborghini_huracan_sto_4.jpg',
      imageAlt: '',
      ratio: Ratio.Square,
    },
    {
      imageSrc: '../../../assets/images/automotive/salon_prive_2021/lemans.jpg',
      imageAlt: '',
      ratio: Ratio.Landscape,
    },
    {
      imageSrc:
        '../../../assets/images/automotive/salon_prive_2021/mclaren_570s.jpg',
      imageAlt: '',
      ratio: Ratio.Square,
    },
    {
      imageSrc:
        '../../../assets/images/automotive/salon_prive_2021/mclaren_765lt_spider.jpg',
      imageAlt: '',
      ratio: Ratio.Landscape,
    },
    {
      imageSrc:
        '../../../assets/images/automotive/salon_prive_2021/mclaren_elva_1.jpg',
      imageAlt: '',
      ratio: Ratio.Landscape,
    },
    {
      imageSrc:
        '../../../assets/images/automotive/salon_prive_2021/mclaren_elva_2.jpg',
      imageAlt: '',
      ratio: Ratio.Landscape,
    },
    {
      imageSrc:
        '../../../assets/images/automotive/salon_prive_2021/mercedes_300sl.jpg',
      imageAlt: '',
      ratio: Ratio.Square,
    },
    {
      imageSrc:
        '../../../assets/images/automotive/salon_prive_2021/pagani_huayra_1.jpg',
      imageAlt: '',
      ratio: Ratio.Square,
    },
    {
      imageSrc:
        '../../../assets/images/automotive/salon_prive_2021/pagani_huayra_2.jpg',
      imageAlt: '',
      ratio: Ratio.Square,
    },
    {
      imageSrc:
        '../../../assets/images/automotive/salon_prive_2021/pagani_huayra_3.jpg',
      imageAlt: '',
      ratio: Ratio.Square,
    },
    {
      imageSrc:
        '../../../assets/images/automotive/salon_prive_2021/pagani_huayra_4.jpg',
      imageAlt: '',
      ratio: Ratio.Square,
    },
    {
      imageSrc:
        '../../../assets/images/automotive/salon_prive_2021/porsche_911_gt.jpg',
      imageAlt: '',
      ratio: Ratio.Square,
    },
    {
      imageSrc:
        '../../../assets/images/automotive/salon_prive_2021/porsche_911_gt3rs.jpg',
      imageAlt: '',
      ratio: Ratio.Square,
    },
    {
      imageSrc:
        '../../../assets/images/automotive/salon_prive_2021/porsche_911_rsr_yellow.jpg',
      imageAlt: '',
      ratio: Ratio.Portrait,
    },
    {
      imageSrc:
        '../../../assets/images/automotive/salon_prive_2021/porsche_911_rsr_blue.jpg',
      imageAlt: '',
      ratio: Ratio.Square,
    },
    {
      imageSrc:
        '../../../assets/images/automotive/salon_prive_2021/porsche_carrera_gt.jpg',
      imageAlt: '',
      ratio: Ratio.Portrait,
    },
    {
      imageSrc:
        '../../../assets/images/automotive/salon_prive_2021/red_collection.jpg',
      imageAlt: '',
      ratio: Ratio.Landscape,
    },
    {
      imageSrc:
        '../../../assets/images/automotive/salon_prive_2021/touring_superleggera_arese_rh95_1.jpg',
      imageAlt: '',
      ratio: Ratio.Square,
    },
    {
      imageSrc:
        '../../../assets/images/automotive/salon_prive_2021/touring_superleggera_arese_rh95_2.jpg',
      imageAlt: '',
      ratio: Ratio.Square,
    },
    {
      imageSrc:
        '../../../assets/images/automotive/salon_prive_2021/zenvo_st1.jpg',
      imageAlt: '',
      ratio: Ratio.Landscape,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
