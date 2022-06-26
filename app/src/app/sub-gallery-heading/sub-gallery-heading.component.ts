import { Component, Input, OnInit } from '@angular/core';
import { Image } from '../image.model';

@Component({
  selector: 'sub-gallery-heading',
  templateUrl: './sub-gallery-heading.component.html',
  styleUrls: ['./sub-gallery-heading.component.css'],
})
export class SubGalleryHeadingComponent implements OnInit {
  @Input() text: string = '';
  @Input() images: Image[] = [];

  constructor() {}

  ngOnInit(): void {}
}
