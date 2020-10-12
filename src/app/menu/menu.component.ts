import { Component, OnInit, ViewChild, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit, AfterViewInit {

  links = ["home", "about", "projects", "contact"];
  @ViewChild('menu') private parentRef: ElementRef<HTMLElement>;
  navElement: HTMLElement;
  buttons: NodeListOf<HTMLElement>;

  constructor() { }

  ngAfterViewInit(): void {
    this.navElement = this.parentRef.nativeElement;
    this.buttons = this.navElement.querySelectorAll('.page-link');
    console.log(this.buttons);
  }

  ngOnInit(): void {

  }

  clearMenu() {
    this.buttons.forEach((button) => {
      if (button.classList.contains('active')) {
        button.classList.remove('active');
      }
    });
  }

}
