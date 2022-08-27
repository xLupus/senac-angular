import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ExInterpComponent } from './views/ex-interp/ex-interp.component';
import { Exer1Component } from './views/exer1/exer1.component';
import { Exer2Component } from './views/exer2/exer2.component';
import { Exer3Component } from './views/exer3/exer3.component';
import { Exer4Component } from './views/exer4/exer4.component';

@NgModule({
  declarations: [
    AppComponent,
    ExInterpComponent,
    Exer1Component,
    Exer2Component,
    Exer3Component,
    Exer4Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
