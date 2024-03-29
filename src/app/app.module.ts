import { MaterialModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { StormCardComponent } from './storm-card/storm-card.component';
import { StormBoardComponent } from './storm-board/storm-board.component';
import {MessageService} from "./message.service";

@NgModule({
  declarations: [
    AppComponent,
    StormCardComponent,
    StormBoardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot()
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
