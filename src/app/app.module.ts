import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';

import { ListComponent } from './ToDO/list/list.component';
import { DetailComponent } from './ToDO/detail/detail.component';






@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    DetailComponent
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatListModule,
  MatCardModule,
  MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
