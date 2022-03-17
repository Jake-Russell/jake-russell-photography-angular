import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact-content',
  templateUrl: './contact-content.component.html',
  styleUrls: ['./contact-content.component.css'],
})
export class ContactContentComponent implements OnInit {
  contactImage = [
    {
      imageSrc: '../../../assets/images/Jake_Russell.JPG',
      imageAlt: '',
    },
  ];

  contactTitle = 'Contact';
  contactText = [
    "If you've got any questions or queries, then please feel free to get in touch via email or the submission form.",
  ];
  constructor() {}

  ngOnInit(): void {}
}
