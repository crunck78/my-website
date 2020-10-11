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
    this.headComp.button.onclick = () => {
      this.aboutComp.aboutElement.scrollIntoView({ behavior: 'smooth' });
      this.menuComp.buttons.forEach((link) => {
        if (link.classList.contains('active')) {
          link.classList.remove('active');
        }
      });
      this.menuComp.buttons[1].classList.add('active');
    }

    this.menuComp.buttons.forEach((button) => {
      button.onclick = () => {
        console.log(button.innerHTML);
        if (button.innerHTML == 'home') {
          this.headComp.homeElement.scrollIntoView({ behavior: 'smooth' });
        }
        if (button.innerHTML == 'about') {
          this.aboutComp.aboutElement.scrollIntoView({ behavior: 'smooth' });
        }
        if (button.innerHTML == 'projects') {
          this.projectsComp.projectsElement.scrollIntoView({ behavior: 'smooth' });
        }
        if (button.innerHTML == 'contact') {
          this.contactComp.contactElement.scrollIntoView({ behavior: 'smooth' });
        }

        this.menuComp.buttons.forEach((link) => {
          if (link.classList.contains('active')) {
            link.classList.remove('active');
          }
        });

        button.classList.add('active');
      }
    });

  }

}
