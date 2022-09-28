import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CountComponent } from './components/count/count.component';
import { CountVer2Component } from './components/count-ver2/count-ver2.component';
import { PepoleComponent } from './components/pepole/pepole.component';

@NgModule({
  declarations: [
    AppComponent,
    CountComponent,
    CountVer2Component,
    PepoleComponent
  ],
  imports: [
    BrowserModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
