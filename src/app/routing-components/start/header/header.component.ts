import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
import { CanvasForm, CanvasSpace, Create, Group, Line, Pt } from 'pts';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements AfterViewInit {

  @ViewChild("pts") private pts: ElementRef<Element>;
  space: CanvasSpace;
  form: CanvasForm;
  points: Group;
  linePerpendicularFromPt: any;

  constructor(public navigation: NavigationService) { }

  ngAfterViewInit() {
    this.initPtsSpace();
    this.drawGraphic();
  }

  initPtsSpace(){
    this.space = new CanvasSpace(this.pts.nativeElement);
    this.space.setup({ bgcolor: "#2d2d1a", retina: true, resize: true });
    this.form = this.space.getForm();
  }

  drawGraphic() {
    this.space.add({
      start: this.setUpDraw.bind(this),
      animate: this.graphic.bind(this),
    });
    this.space.play();
  }


  setUpDraw(bound){
    this.points = this.createRandomPoints();
    this.linePerpendicularFromPt = this.getOpLinePerpendicularFromPt();
  }

  createRandomPoints() {
    return Create.distributeRandom(this.space.innerBound, 50);
  }

  getOpLinePerpendicularFromPt(){
    return new Group(new Pt(), this.space.center.$subtract(0.1)).op(Line.perpendicularFromPt);
  }

  getDistanceFromMouse(point){
    return Line.magnitude(Group.from([point, this.space.pointer]));
  }

  graphic(time, ftime) {
    this.points.rotate2D(-0.0005, this.space.center);
    this.points.forEach(this.drawLineAndPoint.bind(this));
  }

  drawLineAndPoint(point, pointIndex){
      let lp = this.linePerpendicularFromPt(point);
      let ratio = Math.min(1, 1 - lp.$subtract(point).magnitude() / (this.space.size.x / 2));
      this.form.stroke(`rgba(155,155,155,${ratio}`, ratio * 2).line([point, lp]);
      this.form.fillOnly(["#f03", "#09f", "#0c6"][pointIndex % 3]).point(point, 1, "circle");
  }

  onResize() {
    this.redraw();
  }

  redraw(){
    this.space.removeAll();
    this.initPtsSpace();
    this.drawGraphic();
  }
}
