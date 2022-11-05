import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { CepComponent } from './views/cep/cep.component';
import { TimezoneComponent } from './views/timezone/timezone.component';

@NgModule({
  declarations: [
    AppComponent,
    CepComponent,
    TimezoneComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
