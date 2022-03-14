import { Ratio } from './common/ratio.enum';

export interface Image {
  imageSrc: string;
  imageAlt: string;
  ratio?: Ratio;
}
