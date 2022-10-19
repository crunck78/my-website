import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { InViewportModule } from '@thisissoon/angular-inviewport';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';

import { HeaderComponent } from './routing-components/start/header/header.component';
import { AboutComponent } from './routing-components/start/about/about.component';
import { ProjectsComponent } from './routing-components/start/projects/projects.component';
import { ContactComponent } from './routing-components/start/contact/contact.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { StartComponent } from './routing-components/start/start.component';
import { ImprintComponent } from './routing-components/imprint/imprint.component';
import { DataProtectionComponent } from './data-protection/data-protection.component';
import { CookieStatementComponent } from './cookie-statement/cookie-statement.component';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './routing-components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    ProjectsComponent,
    ContactComponent,
    MenuComponent,
    FooterComponent,
    StartComponent,
    ImprintComponent,
    DataProtectionComponent,
    CookieStatementComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    InViewportModule,
    MatGridListModule,
    MatCardModule,
    MatProgressBarModule,
    MatTableModule,
    MatIconModule
  ],
  providers: [
    { provide: Window, useValue: window }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
