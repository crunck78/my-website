import { Component, OnInit, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { ProgressBarService } from '../services/progress-bar.service';
import { NavigationService } from '../services/navigation.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit, AfterViewInit {
  anchores = ["home", "about", "projects", "contact"];
  @ViewChild('menu') private parentRef: ElementRef<HTMLElement>;
  navElement: HTMLElement;
  buttons: NodeListOf<HTMLElement>;

  constructor(
    public progressBar: ProgressBarService,
    public navigation: NavigationService) { }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
   
  }

  /**
   * Toggles CSS class bottom for Menu.
   * Using Wildcard for StartComponent will break this. (See app-routing.module.ts)
   */
  toggleCssBottom() {
    return this.navigation.currentPath == '' && window.scrollY < window.innerHeight;
  }
}