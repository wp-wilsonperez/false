<<<<<<< HEAD
import 'pace';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AgmCoreModule } from 'angular2-google-maps/core';

import { routing } from './app.routing';
import { AppConfig } from './app.config';

import { AppComponent } from './app.component';
import { ErrorComponent } from './pages/error/error.component';
import { HttpModule } from '@angular/http';



@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDe_oVpi9eRSN99G4o6TwVjJbFBNr58NxE'
    }),
    routing   
  ],
  providers: [AppConfig],
  bootstrap: [AppComponent]
})
export class AppModule { }
=======
import 'pace';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AgmCoreModule } from 'angular2-google-maps/core';

import { routing } from './app.routing';
import { AppConfig } from './app.config';

import { AppComponent } from './app.component';
import { ErrorComponent } from './pages/error/error.component';
import { HttpModule } from '@angular/http';



@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDe_oVpi9eRSN99G4o6TwVjJbFBNr58NxE'
    }),
    routing   
  ],
  providers: [AppConfig],
  bootstrap: [AppComponent]
})
export class AppModule { }
>>>>>>> 64d67aca73e9be188c2c2b31073cc8a07ac31205
