// imported plugins
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';
import { Camera } from '@ionic-native/camera';

// imported pages
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { DetailPage } from '../pages/detail/detail';
import { GecontroleerdPage } from '../pages/gecontroleerd/gecontroleerd';

// imported providers
import { TappuntWeeklijstProvider } from '../providers/tappunt-weeklijst/tappunt-weeklijst';
import { StorageProvider } from '../providers/storage/storage';

// imported pipes
import { SafePipe } from '../pipes/safe-html/safe-html';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    DetailPage,
    GecontroleerdPage,
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
    DetailPage,
    GecontroleerdPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera, 
    BarcodeScanner,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TappuntWeeklijstProvider,
    StorageProvider,
  ]
})
export class AppModule {}
