import { Ratio } from './common/ratio.enum';

export interface Image {
  imageSrc: string;
  imageAlt: string;
  landscape?: boolean;
  ratio?: Ratio;
}
