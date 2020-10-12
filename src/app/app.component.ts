import { AfterViewInit, ViewChild } from '@angular/core';
import { Component } from '@angular/core';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { ProjectsComponent } from './projects/projects.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  @ViewChild(ContactComponent)
  private contactComp: ContactComponent;

  @ViewChild(ProjectsComponent)
  private projectsComp: ProjectsComponent;

  @ViewChild(AboutComponent)
  private aboutComp: AboutComponent;

  @ViewChild(HeaderComponent)
  private headComp: HeaderComponent;

  @ViewChild(MenuComponent)
  private menuComp: MenuComponent;

  title = 'my-website';
  ngAfterViewInit(): void {

    //listen for header button click
    this.headComp.button.onclick = () => {
      this.aboutComp.aboutElement.scrollIntoView({ behavior: 'smooth' });
      this.menuComp.clearMenu();
      this.menuComp.buttons[1].classList.add('active');
    }

    this.listenForMenuButtonsClick();

  }

  listenForMenuButtonsClick() {
    this.menuComp.buttons.forEach((button) => {
      button.onclick = () => {
        //console.log(button.innerHTML);
        if (button.innerHTML == 'home') {
          this.scrollTo(this.headComp.homeElement);
        }
        if (button.innerHTML == 'about') {
          this.scrollTo(this.aboutComp.aboutElement);
        }
        if (button.innerHTML == 'projects') {
          this.scrollTo(this.projectsComp.projectsElement);
        }
        if (button.innerHTML == 'contact') {
          this.scrollTo(this.contactComp.contactElement);
        }
        this.menuComp.clearMenu();
        button.classList.add('active');
      }
    });
  }

  scrollTo(element: HTMLElement) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}
