import { ElementRef } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit, AfterViewInit {
  @ViewChild("about") private parentRef: ElementRef<HTMLElement>;
  aboutElement: HTMLElement;

  constructor() { }

  ngOnInit(): void {

  }

  ngAfterViewInit(){
    this.aboutElement = this.parentRef.nativeElement;
  }
}
