import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { InViewportModule } from '@thisissoon/angular-inviewport';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    InViewportModule.forServer()
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
