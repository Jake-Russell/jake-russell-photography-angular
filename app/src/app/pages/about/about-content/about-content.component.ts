import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'about-content',
  templateUrl: './about-content.component.html',
  styleUrls: ['./about-content.component.css'],
})
export class AboutContentComponent implements OnInit {
  aboutImage = [
    {
      imageSrc: '../../../assets/images/jake_russell.jpg',
      imageAlt: '',
    },
  ];

  aboutTitle = 'About Me';
  aboutText = [
    "Hi, I'm Jake.",
    "From a young age I've always had a passion for photography, and enjoy taking pictures of just about anything and everything! At A-Level I decided to take this passion further by studying Photography. I was able to develop all kinds of different skills, from in camera and post-production image manipulation, to developing film and prints in the darkroom. I really enjoyed this subject and managed to achieve an A* in the course.",
    'During my first year of University, I worked for Citylife Loughborough as the official photographer on one of their excursions to Snowdonia National Park. I was responsible for taking promotional and marketing images of both the landscapes and students as they explored the national park.',
    'One of my favourite areas of photography is long exposure. I find the unknown results fascinating, and love experimenting with light to discover all sorts of different outcomes.',
    'If you’re interested in any of my work, then please do get in touch.',
  ];

  constructor() {}

  ngOnInit(): void {}
}
