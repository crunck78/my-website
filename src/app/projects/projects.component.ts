import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { allProjects } from '../projects';
import { ViewportserviceService } from '../services/viewportservice.service'


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit, AfterViewInit {
  allProjects: Object[] = [];
  show = false;
  colsSize: number;
  @ViewChild('projects') private parentRef: ElementRef<HTMLElement>
  projectsElement: HTMLElement;

  constructor(private viewPortService: ViewportserviceService) { }

  ngOnInit(): void {
    this.colsSize = window.innerWidth <= 600 ? 1 : 2;
    allProjects.forEach((project) => {
      this.allProjects.push(Object.assign({}, project));
    });
  }

  ngAfterViewInit() {
    this.projectsElement = this.parentRef.nativeElement;
  }

  showCard(index: number) {
    this.projectsElement.querySelectorAll('mat-card').item(index).classList.remove('hidde');
  }

  hiddeCard(index: number) {
    this.projectsElement.querySelectorAll('mat-card').item(index).classList.add('hidde');
  }

  visitProject(url: string) {
    window.open(url, "_blank");
  }

  //sets the mat-grid-list cols attribute between 1 and 2 on window resize
  onResize(event: any) {
    this.colsSize = event.target.innerWidth <= 600 ? 1 : 2;
  }

  onInViewportChange(inViewport: boolean, id: string) {
    this.viewPortService.isVisible = inViewport;
    this.viewPortService.currentInView = id;
    this.viewPortService.projectsIsVissible = inViewport;
  }
}