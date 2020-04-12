import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HijoComponent } from './hijo/hijo.component';
import { from } from 'rxjs';
import { AppRoutingModule } from './app-routing.module';
import { PadreComponent } from './padre/padre.component';
import { AppComponent } from './app.component';
import {ButtonModule} from 'primeng/button';
import{FormsModule} from '@angular/forms';
import {PasswordModule} from 'primeng/password';
import {InputTextModule} from 'primeng/inputtext';

import {TableModule} from 'primeng/table';



@NgModule({
  declarations: [
    AppComponent,
    PadreComponent,
    HijoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    FormsModule,
    PasswordModule,
    InputTextModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
