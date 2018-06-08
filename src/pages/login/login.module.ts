// imported plugins
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

// imported pages
import { LoginPage } from './login';

@NgModule({
  declarations: [
    LoginPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginPage),
  ],
})
export class LoginPageModule {}
