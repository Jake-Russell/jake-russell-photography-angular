import { Component, OnInit } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  isMatMenuOpen = false;
  enteredButton = false;
  prevButtonTrigger!: MatMenuTrigger;

  constructor() {}

  ngOnInit(): void {}

  menuLeave(trigger: MatMenuTrigger) {
    setTimeout(() => {
      this.isMatMenuOpen = false;
      trigger.closeMenu();
    }, 100);
  }

  buttonEnter(trigger: MatMenuTrigger) {
    setTimeout(() => {
      this.enteredButton = true;
      this.prevButtonTrigger = trigger;
      trigger.openMenu();
    }, 100);
  }

  buttonLeave(trigger: MatMenuTrigger) {
    setTimeout(() => {
      if (!this.isMatMenuOpen) {
        trigger.closeMenu();
      }
    }, 100);
  }
}
