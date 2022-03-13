import { Component, Input, OnInit } from '@angular/core';
import { Image } from '../image.model';

@Component({
  selector: 'image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.css'],
})
export class ImageGalleryComponent implements OnInit {
  @Input() images: Image[] = [];

  constructor() {}

  ngOnInit(): void {}
}
