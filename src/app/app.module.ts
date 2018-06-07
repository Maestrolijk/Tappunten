import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { SafePipe } from '../pipes/safe-html/safe-html';
import { Injectable } from '@angular/core';
import { isEqual, differenceWith } from 'lodash';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { SentPage } from '../pages/sent/sent';
import { DetailPage } from '../pages/detail/detail';
import { GecontroleerdPage } from '../pages/gecontroleerd/gecontroleerd';
import { TappuntenapiPage } from '../pages/tappuntenapi/tappuntenapi';


import { TappuntWeeklijstProvider } from '../providers/tappunt-weeklijst/tappunt-weeklijst';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    SentPage,
    DetailPage,
    GecontroleerdPage,
    TappuntenapiPage,
    SafePipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp, {
      scrollAssist: false, 
      autoFocusAssist: false
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    SentPage,
    DetailPage,
    TappuntenapiPage,
    GecontroleerdPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BarcodeScanner,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TappuntWeeklijstProvider,
  ]
})
export class AppModule {}
