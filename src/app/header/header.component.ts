import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
import { CanvasSpace } from 'pts';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit {

  @ViewChild("parent") private parentRef: ElementRef<HTMLElement>;

  space : any;
  canvas: HTMLElement;

  constructor(private window: Window) {

  }

  ngAfterViewInit() {
    //get canvas from parent
    const parentElement = this.parentRef.nativeElement;
    this.canvas = parentElement.querySelector("canvas");
    //console.log(this.canvas);
    this.graphicDraw();
  }

  ngOnInit(): void {

  }

  graphicDraw(){
    //init Pts.space
    this.space = new CanvasSpace(this.canvas);
    this.space.setup({ bgcolor: "#000210", retina: true, resize: true });
    var form = this.space.getForm();

    //draw
    this.space.add({
      start: (bound) => { },

      animate: (time, ftime) => {
        form.point(this.space.pointer, 10);
      },

      action: (type, x, y) => { }
    });
    this.space.bindMouse().bindTouch().play();
  }

  onResize(){
    this.space.removeAll();
    //this.canvas.remove();
    this.graphicDraw();
  }
}
