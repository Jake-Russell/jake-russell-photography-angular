import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Image } from '../../image.model';

@Component({
  selector: 'image-viewer',
  templateUrl: './image-viewer.component.html',
  styleUrls: ['./image-viewer.component.css'],
})
export class ImageViewerComponent implements OnInit {
  // @Input() images: Image[] = [];
  images: Image[] = [];
  image!: Image;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    console.log(`${this.data.images[data.index].imageSrc}`);
    this.images = data.images;
    this.image = this.data.image;
  }

  ngOnInit(): void {}
}