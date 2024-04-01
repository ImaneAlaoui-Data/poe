import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { PoeModule } from './poe/poe.module';
import { PoeService } from './poe/services/poe.service';
import { PoeFormComponent } from './poe-form/poe-form.component';


@NgModule({
  declarations: [
    AppComponent,
    PoeFormComponent,
  ],
  imports: [
    BrowserModule,
    HomeModule,
    PoeModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
