import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'photo-thumbnail-text',
  templateUrl: './photo-thumbnail-text.component.html',
  styleUrls: ['./photo-thumbnail-text.component.css'],
})
export class PhotoThumbnailTextComponent implements OnInit {
  @Input() text: string = '';

  constructor() {}

  ngOnInit(): void {}
}
