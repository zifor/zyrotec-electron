import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MainWindowModule } from './windows/main-window/main-window.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainWindowModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
