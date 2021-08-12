import { ElementRef } from '@angular/core';
import { ViewChild } from '@angular/core';
//Angular prevents styles from intercepting inside and outside of the component.
import { ViewEncapsulation } from '@angular/core';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation.service';
import { paragraphs } from '../../paragraphs';

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

  paragraphs = paragraphs;

  constructor(public navigation: NavigationService) { }

  ngAfterViewInit() {
    this.aboutElement = this.parentRef.nativeElement;
    let paragraphContainers = this.aboutElement.querySelectorAll('.text-mask');
    //console.log(paragraphContainers);
    paragraphContainers.forEach((container, index) => {
      container.insertAdjacentHTML('beforeend', this.paragraphs[index]);
    });
  }
}
