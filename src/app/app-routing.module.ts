import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { CookieStatementComponent } from './cookie-statement/cookie-statement.component';
import { DataProtectionComponent } from './data-protection/data-protection.component';
import { ImprintComponent } from './routing-components/imprint/imprint.component';
import { PageNotFoundComponent } from './routing-components/page-not-found/page-not-found.component';
import { StartComponent } from './routing-components/start/start.component';

const routerOptions: ExtraOptions = {
  initialNavigation: 'enabledNonBlocking',
  relativeLinkResolution: 'legacy',
  anchorScrolling: 'enabled',
  onSameUrlNavigation: 'reload',
  scrollPositionRestoration: 'top'
};

const routes: Routes = [
  {
    path: '', component: StartComponent
  },
  // {
  //   path: 'data-protection', component: DataProtectionComponent
  // },
  {
    path: 'imprint', component: ImprintComponent
  },
  // {
  //   path: 'cookie-statement', component: CookieStatementComponent
  // },
  {
    path: '**', component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
