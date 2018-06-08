// imported plugins
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Storage } from '@ionic/storage';

// imported pages
import { HomePage } from '../home/home';

// imported providers
import { TappuntWeeklijstProvider } from '../../providers/tappunt-weeklijst/tappunt-weeklijst';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  //variables
  splash = true;
  loginForm: FormGroup;
  username: any;
  loginname: any;
  usereligable: any;
  showMe = false;
  storedname: string;
  remembertoggle: boolean;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public storage: Storage,
    public tp: TappuntWeeklijstProvider,
    formBuilder: FormBuilder) {
  }

  ionViewDidLoad() {
    // load the animated splash screen
    setTimeout(() => {
      this.splash = false;
    }, 4000);
    this.getUsername();
  }

  // go to the homepage and push the user that is logged in
  doLoadHomePage() {
    this.tp.userExists(this.username)
      .then(data => { 
        this.usereligable = data;

        if(this.usereligable === true) {
            this.loginname = this.username;

          // if button is toggled, write the loginname to the localstorage
          if(this.remembertoggle === true) {
            this.storage.set(this.storedname, this.username);
          }
          else {
            // clear the localstorage username
            this.storage.set(this.storedname, "");
          }
          // if eligable user is found go to the homepage
          this.navCtrl.setRoot(HomePage, {'loginname': this.loginname})
        }
        else {
          // if no eligable user is found give failed message
          console.log("Gebruiker is niet gemachtigd om in te loggen");
          this.showMe = true;
        }
      }
      , (err) => {
        console.log("Error: ", err);
      })
  }

  // get the username from the localstorage
  getUsername() {
    this.storage.get(this.storedname).then((val) => {
      this.username = val;
      // if username is found set toggle true
      if(val != "") {
        this.remembertoggle = true;
      }
    });
  }
}
