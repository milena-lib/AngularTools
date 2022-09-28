import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CountComponent } from './components/count/count.component';
import { CountVer2Component } from './components/count-ver2/count-ver2.component';
import { PepoleComponent } from './components/pepole/pepole.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLinkActive } from '@angular/router';
import { SearchOnServerComponent } from './components/search-on-server/search-on-server.component';

@NgModule({
  declarations: [
    AppComponent,
    CountComponent,
    CountVer2Component,
    PepoleComponent,
    SearchOnServerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
