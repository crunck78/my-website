import { ElementRef } from '@angular/core';
import { ViewChild } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CanvasSpace, Create, Group, Line, Polygon, Pt, Rectangle } from 'pts';
import { paragraphs } from '../paragraphs';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AboutComponent implements OnInit, AfterViewInit {
  @ViewChild("about") private parentRef: ElementRef<HTMLElement>;
  aboutElement: HTMLElement;

  paragraphs = paragraphs;
 
  constructor() { }

  ngOnInit(): void {

  }

  ngAfterViewInit() {
    this.aboutElement = this.parentRef.nativeElement;
    let paragraphContainers = this.aboutElement.querySelectorAll('.text-mask');
    //console.log(paragraphContainers);
    paragraphContainers.forEach( (container, index) =>{
        container.insertAdjacentHTML( 'beforeend', this.paragraphs[index]);
    });
  }
}
