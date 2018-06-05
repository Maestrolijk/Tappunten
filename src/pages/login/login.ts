import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators, EmailValidator } from '@angular/forms';
import { Storage } from '@ionic/storage';
import { TappuntWeeklijstProvider } from '../../providers/tappunt-weeklijst/tappunt-weeklijst';

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
  usereligable: any;
  showMe = false;


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public storage: Storage,
    public tp: TappuntWeeklijstProvider,
    formBuilder: FormBuilder) {

      // this.loginForm = formBuilder.group({
      //   email: [null, [Validators.required, Validators.email]],
      // });

  }

  ionViewDidLoad() {}

  // go to the homepage and push the user that is logged in
  doLoadHomePage() {

    this.tp.userExists(this.username)
      .then(data => { 
        this.usereligable = data;

        if(this.usereligable === true) {
          this.loginname = this.username;
          this.navCtrl.setRoot(HomePage, {'loginname': this.loginname})
        }
        else {
          console.log("Gebruiker is niet gemachtigd om in te loggen");
          this.showMe = true;
        }
      }
      , (err) => {
        console.log("Error: ", err);
      })
  }
}
