import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/Forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DuasViasComponent } from './views/duas-vias/duas-vias.component';
import { Exer01Component } from './exer01/exer01.component';
import { Exer02Component } from './exer02/exer02.component';

@NgModule({
  declarations: [
    AppComponent,
    DuasViasComponent,
    Exer01Component,
    Exer02Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
