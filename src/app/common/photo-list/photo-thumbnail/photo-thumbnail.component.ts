import { Component, Input, OnInit } from '@angular/core';
import { ImageThumbnail } from 'src/app/image-thumbnail.model';

@Component({
  selector: 'photo-thumbnail',
  templateUrl: './photo-thumbnail.component.html',
  styleUrls: ['./photo-thumbnail.component.css'],
})
export class PhotoThumbnailComponent implements OnInit {
  @Input() imageThumbnail!: ImageThumbnail;

  constructor() {}

  ngOnInit(): void {}
}
