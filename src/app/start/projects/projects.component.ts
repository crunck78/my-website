import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation.service';
import { allProjects } from '../../projects';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit, AfterViewInit {
  allProjects: Object[] = [];
  show = false;
  colsSize: number;
  rowHeight = "2:1";
  @ViewChild('projects') private parentRef: ElementRef<HTMLElement>
  projectsElement: HTMLElement;

  constructor(public navigation: NavigationService) { }

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
}