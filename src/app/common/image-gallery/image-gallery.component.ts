import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ImageViewerComponent } from '../image-viewer/image-viewer.component';
import { Image } from '../../image.model';

@Component({
  selector: 'image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.css'],
})
export class ImageGalleryComponent implements OnInit {
  @Input() images: Image[] = [];

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  click(image: Image, index: number) {
    console.log(`Ratio is ${image.ratio}`);

    const dialogRef = this.dialog.open(ImageViewerComponent, {
      // width: '75%',
      // maxHeight: '80vh',

      // width: '85%',
      // height: '75%',
      data: {
        image,
        images: this.images,
        index,
      },
      // panelClass: image.landscape ? 'landscape' : 'portrait',
      panelClass: image.ratio,
    });
  }
}
