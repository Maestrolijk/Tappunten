// imported plugins
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

// imported pages
import { DetailPage } from '../detail/detail';

/**
 * Generated class for the GecontroleerdPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-gecontroleerd',
  templateUrl: 'gecontroleerd.html',
})
export class GecontroleerdPage {

  // variables
  jsonData :any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public modalCtrl: ModalController) {
    this.jsonData = navParams.get('tappuntenGecontroleerd');
  }

  ionViewDidLoad() {}

  // open the detail page about the tappunt when user clicks on the tappunt
  doTappuntDetail(tappuntData) {    
    let myModal = this.modalCtrl.create(DetailPage, { 'tappuntenDetails': tappuntData });
    myModal.present();
  }
}
