import { Component, OnInit, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { ViewportserviceService } from '../services/viewportservice.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements AfterViewInit {
  links = ["home", "about", "projects", "contact"];
  @ViewChild('menu') private parentRef: ElementRef<HTMLElement>;
  navElement: HTMLElement;
  buttons: NodeListOf<HTMLElement>;

  constructor(public viewPortService: ViewportserviceService) { }

  ngAfterViewInit(): void {
    this.navElement = this.parentRef.nativeElement;
    this.buttons = this.navElement.querySelectorAll('.page-link');
  }

  clearMenu() {
    this.buttons.forEach((button) => {
      if (button.classList.contains('active')) {
        button.classList.remove('active');
      }
    });
  }
}