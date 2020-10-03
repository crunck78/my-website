import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
import { CanvasSpace, Create, Group, Line, Pt } from 'pts';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit {

  @ViewChild("parent") private parentRef: ElementRef<HTMLElement>;

  space: any;
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

  graphicDraw() {
    //init Pts.space
    this.space = new CanvasSpace(this.canvas);
    this.space.setup({ bgcolor: "#000210", retina: true, resize: true });
    var form = this.space.getForm();
    var singularityPt = new Pt([this.space.size.x, 0 ]);
    var line = Line.fromAngle([ 0, this.space.size.y ], 2.4, 1);

    var pts = new Group();

    this.space.add({

      // creatr 200 random points
      start: (bound) => {
        pts = Create.distributeRandom(this.space.innerBound, 50);
      },

      animate: (time, ftime) => {
        // make a line and turn it into an "op" (see the guide on Op for more)
        //let perpend = new Group( this.space.center.$subtract(0.1), this.space.pointer ).op( Line.perpendicularFromPt );
        pts.rotate2D(-0.0005, this.space.center);
        //line.rotate2D(0.0005,  [0,0]);

        pts.forEach((p, i) => {
          let distanceFromMouse = Line.magnitude(Group.from([p, this.space.pointer]));
          // for each point, find the perpendicular to the line
          //let lp = perpend( p );
          //var ratio = Math.min( 1, 1 - lp.$subtract(p).magnitude()/(this.space.size.x/2) );
          //form.stroke(`rgba(255,255,255,${ratio}`, ratio*2).line( [ p, lp ] );
          //form.stroke(["#f03", "#09f", "#0c6"][i % 3]).line( [ p, singularityPt ] );
          //form.stroke(["#f03", "#09f", "#0c6"][i % 3]).line( [p, Line.perpendicularFromPt(line, p)] );
          form.stroke(`rgba(${ distanceFromMouse % 255 },${ distanceFromMouse % 255 },${ distanceFromMouse % 255 }, ${distanceFromMouse % 255})`).line( [p, Line.perpendicularFromPt(line, p)] );
          form.fillOnly(["#f03", "#09f", "#0c6"][i % 3]).point(p, 1, "circle");
         
        });
        //form.fillOnly("#f03").point([this.space.size.x, 0], 10, "circle");
      },

    });

    //// ----

    this.space.bindMouse().bindTouch().play();
  }

  onResize() {
    this.space.removeAll();
    //this.canvas.remove();
    this.graphicDraw();
  }
}
