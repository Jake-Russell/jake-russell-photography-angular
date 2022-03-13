import { Component, Input, OnInit } from '@angular/core';
import { Image } from '../image.model';

@Component({
  selector: 'top-gallery',
  templateUrl: './top-gallery.component.html',
  styleUrls: ['./top-gallery.component.css'],
})
export class TopGalleryComponent implements OnInit {
  @Input() images: Image[] = [];
  @Input() galleryTitle: string = '';
  @Input() galleryText: string[] = [];

  constructor() {}

  ngOnInit(): void {}
}
