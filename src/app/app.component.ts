import { AfterViewInit, ViewChild } from '@angular/core';
import { Component } from '@angular/core';
import { AboutComponent } from './routing-components/start/about/about.component';
import { ContactComponent } from './routing-components/start/contact/contact.component';
import { HeaderComponent } from './routing-components/start/header/header.component';
import { MenuComponent } from './menu/menu.component';
import { ProjectsComponent } from './routing-components/start/projects/projects.component';
import { NavigationService } from './services/navigation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  constructor(){

  }

  title = 'my-website';

  ngAfterViewInit(): void {

  }
}
