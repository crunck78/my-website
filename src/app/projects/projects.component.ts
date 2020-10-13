import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { allProjects } from '../projects';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit, AfterViewInit {

  allProjects: Object[] = [];

  @ViewChild('projects') private parentRef: ElementRef<HTMLElement>
  projectsElement: HTMLElement;

  constructor() { }

  ngOnInit(): void {
   
   allProjects.forEach((project) =>{
    this.allProjects.push(Object.assign({}, project));
   });
    console.log(this.allProjects);
  }

  ngAfterViewInit() {
    this.projectsElement = this.parentRef.nativeElement;
  }

}