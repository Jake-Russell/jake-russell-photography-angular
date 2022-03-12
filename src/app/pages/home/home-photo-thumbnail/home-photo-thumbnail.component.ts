import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'home-photo-thumbnail',
  templateUrl: './home-photo-thumbnail.component.html',
  styleUrls: ['./home-photo-thumbnail.component.css'],
})
export class HomePhotoThumbnailComponent implements OnInit {
  @Input() gallery!: string;

  imageUrl: string = '';
  labelUrl: string = '';
  labelHoverUrl: string = '';

  constructor() {}

  ngOnInit(): void {
    this.imageUrl = `../../../../assets/images/home_images/${this.gallery}.jpg`;
    this.labelUrl = `../../../../assets/images/labels/${this.gallery}_label.png`;
    this.labelHoverUrl = `../../../../assets/images/labels/${this.gallery}_label_hover.png`;
  }
}
