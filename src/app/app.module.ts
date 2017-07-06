import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {LogService} from './log.service';
import { CmpbComponent } from './cmpb.component';

import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    CmpbComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
