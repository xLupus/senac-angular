import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/Forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ExemploNgifComponent } from './views/exemplo-ngif/exemplo-ngif.component';
import { Exer01Component } from './views/exer01/exer01.component';
import { Exer02Component } from './views/exer02/exer02.component';
import { Exer03Component } from './views/exer03/exer03.component';
import { ExemploNgforComponent } from './views/exemplo-ngfor/exemplo-ngfor.component';
import { Exer04Component } from './views/exer04/exer04.component';
import { Exer05Component } from './views/exer05/exer05.component';
import { Exer06Component } from './views/exer06/exer06.component';
import { Exer07Component } from './views/exer07/exer07.component';
import { ExemploNgswitchComponent } from './views/exemplo-ngswitch/exemplo-ngswitch.component';
import { Exer08Component } from './views/exer08/exer08.component';

@NgModule({
  declarations: [
    AppComponent,
    ExemploNgifComponent,
    Exer01Component,
    Exer02Component,
    Exer03Component,
    ExemploNgforComponent,
    Exer04Component,
    Exer05Component,
    Exer06Component,
    Exer07Component,
    ExemploNgswitchComponent,
    Exer08Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
