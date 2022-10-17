import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivationEnd, NavigationEnd, Router } from '@angular/router';
import { StartComponent } from '../routing-components/start/start.component';
import { Location } from "@angular/common";

@Injectable({
  providedIn: 'root'
})
export class NavigationService {


  currentPath: string;
  currentInViewPort: string;

  constructor(private location: Location ,private router: Router, private route: ActivatedRoute) {

    this.router.events
      .subscribe(event => {
        if (event instanceof NavigationEnd) {
         this.currentPath = location.path();
         console.log(this.currentPath);
        }
      });
  }

  isSectionInViewPort(sectionId){
    return this.currentPath == "" && this.currentInViewPort == sectionId;
  }

  handleInViewPortChange( inViewPort, sectionId ){
      this.currentInViewPort = inViewPort ? sectionId : this.currentInViewPort;
  }
}
