import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { ContentProjectionComponent } from './content-projection/content-projection.component';
import { ContentProjection2Component } from './content-projection2/content-projection2.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    ContentProjectionComponent,
    ContentProjection2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
