// imported plugins
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

// imported pipes
import { SafePipe } from '../../pipes/safe-html/safe-html';

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {

  // variables
  tappuntDetail: any;
  img = "data:image/jpeg;base64,/9j/"

  constructor(
    public navCtrl: NavController,
    public params: NavParams,
    public viewCtrl: ViewController) {
    this.tappuntDetail = params.get('tappuntenDetails');
  }

  ionViewDidLoad() {}

  // close the modal screen
  doClose() {
    this.viewCtrl.dismiss();
  }
}
