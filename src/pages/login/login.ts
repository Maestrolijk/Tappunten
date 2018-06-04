import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators, EmailValidator } from '@angular/forms';
import { Storage } from '@ionic/storage';

import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  loginForm: FormGroup;

  
  username: any;
  loginname: any;


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public storage: Storage,
    formBuilder: FormBuilder) {

      // this.loginForm = formBuilder.group({
      //   email: [null, [Validators.required, Validators.email]],
      // });

  }

  ionViewDidLoad() {}

  // go to the homepage and push the user that is logged in
  doLoadHomePage() {
    this.loginname = this.username;
    this.navCtrl.setRoot(HomePage, {'loginname': this.loginname})
  }

}
