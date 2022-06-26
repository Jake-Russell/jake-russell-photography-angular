import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ImageThumbnail } from 'src/app/image-thumbnail.model';

@Component({
  selector: 'photo-thumbnail',
  templateUrl: './photo-thumbnail.component.html',
  styleUrls: ['./photo-thumbnail.component.css'],
})
export class PhotoThumbnailComponent implements OnInit {
  @Input() imageThumbnail!: ImageThumbnail;

  constructor(private router: Router) {}

  onClick() {
    this.router.navigateByUrl(this.imageThumbnail.galleryUrl);
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }

  ngOnInit(): void {}
}
