import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgForComponentComponent } from './ng-for-component/ng-for-component.component';
import { NowyComponent } from './nowy/nowy.component';
import { SwitchComponentComponent } from './switch-component/switch-component.component';
import { DomModyficationComponent } from './dom-modyfication/dom-modyfication.component';

@NgModule({
  declarations: [
    AppComponent,
    NgForComponentComponent,
    NowyComponent,
    SwitchComponentComponent,
    DomModyficationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
