import { ElementRef } from '@angular/core';
import { ViewChild } from '@angular/core';
//Angular prevents styles from intercepting inside and outside of the component.
import { ViewEncapsulation } from '@angular/core';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { InViewportDirective, InViewportModule } from '@thisissoon/angular-inviewport';
//import { CanvasSpace, Create, Group, Line, Polygon, Pt, Rectangle } from 'pts';
import { paragraphs } from '../paragraphs';
import { ViewportserviceService } from '../services/viewportservice.service'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  //change the encapsulation to None in your component. This way, you'll be able to define classes  
  encapsulation: ViewEncapsulation.None,
})
export class AboutComponent implements AfterViewInit {
  @ViewChild("about") private parentRef: ElementRef<HTMLElement>;
  aboutElement: HTMLElement;
  inViewBreakPoint: number; //initialize in app.component.ts via setInViewBreakPoint function

  paragraphs = paragraphs;

  constructor(private viewPortService: ViewportserviceService) { }

  ngAfterViewInit() {
    this.aboutElement = this.parentRef.nativeElement;
    let paragraphContainers = this.aboutElement.querySelectorAll('.text-mask');
    //console.log(paragraphContainers);
    paragraphContainers.forEach((container, index) => {
      container.insertAdjacentHTML('beforeend', this.paragraphs[index]);
    });
  }
  
  onInViewportChange(inViewport: boolean, id: string) {
    this.viewPortService.isVisible = inViewport;
    this.viewPortService.currentInView = id;
    this.viewPortService.aboutIsVissible = inViewport;
  }
}
