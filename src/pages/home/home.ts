// imported plugins
import { Component } from '@angular/core';
import { NavController, NavParams, ActionSheetController, ModalController } from 'ionic-angular';
import { differenceWith } from 'lodash';
import { Storage } from '@ionic/storage';
import * as moment from 'moment';
import { ItemSliding, ToastController } from 'ionic-angular';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner';

// imported pages
import { DetailPage } from '../detail/detail';
import { GecontroleerdPage } from '../gecontroleerd/gecontroleerd';

// imported providers
import { TappuntWeeklijstProvider } from '../../providers/tappunt-weeklijst/tappunt-weeklijst';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  // general variables
  userloginname: any;
  weekNumber: any;

  //tappunten variables
  tappunten: any;
  tappuntToDoCount: number;
  tappuntTotalCount: number;
  tappuntenOriginal: any;
  tappuntenFiltered: any;
  notinCollection: any;

  // barcode variables
  options: BarcodeScannerOptions;
  scannedData: any = {};

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public actionSheetCtrl: ActionSheetController,
    public modalCtrl: ModalController,
    public scanner: BarcodeScanner,
    private toastCtrl: ToastController,
    public storage: Storage,
    public tp: TappuntWeeklijstProvider) {
    this.userloginname = navParams.get('loginname');
    this.getWeekNumber();
  }

  ionViewDidLoad() {
    this.getTapPunten();
  }

  // get the current weeknumber
  getWeekNumber() {
    this.weekNumber = new Date();
    return this.weekNumber = moment(this.weekNumber).week();
  }

  // show a new page with the tappunten that are already checked
  doCheckedPage() {
    this.navCtrl.push(GecontroleerdPage, { 'tappuntenGecontroleerd': this.tappuntenFiltered });
  }

  // open the detail page about the tappunt when user clicks on the tappunt
  doTappuntDetail(tappuntData) {
    let myModal = this.modalCtrl.create(DetailPage, { 'tappuntenDetails': tappuntData });
    myModal.present();
  }

  // check the tappunt manually by swiping to the right and check the item
  check(item) {
    this.tp.setTapPuntGespoeld(item.tapPuntId);
    this.tappunten = this.tappunten.filter(i => i.tapPuntId != item.tapPuntId);
    this.expandAction(item, 'checked', 'Tappunt is gecontroleerd.');
    this.tappuntToDoCount = this.tappuntToDoCount + 1;
    this.tappuntenFiltered = differenceWith(this.tappuntenOriginal, this.tappunten);
  }

  // parse messages (toasts) on the bottom of the screen that will disappear after 2000 ms
  expandAction(item: ItemSliding, _: any, text: string) {
    setTimeout(() => {
      const toast = this.toastCtrl.create({
        message: text
      });
      toast.present();
      setTimeout(() => toast.dismiss(), 2000);
    }, 500);
  }

  // scan the tappunt, filter the TO-DO list and set tappunt as checked
  scan(item) {
    this.options = {
      prompt: 'Scan het tappunt'
    };
    this.scanner.scan(this.options).then((data) => {
      this.scannedData = data;
      this.notinCollection = this.tappunten.filter(i => i.tapPuntId == this.scannedData.text);
      if (this.notinCollection.length === 0) {
        this.expandAction(item, 'notappunt', 'Dit tappunt bestaat niet of is al gecontroleerd.');
      }
      else {
        this.tp.setTapPuntGespoeld(item.tapPuntId);
        this.tappunten = this.tappunten.filter(i => i.tappuntId != this.scannedData.text);
        this.tappuntenFiltered = differenceWith(this.tappuntenOriginal, this.tappunten);
        this.expandAction(item, 'checked', 'Tappunt is gecontroleerd.');
        this.tappuntToDoCount = this.tappuntToDoCount + 1;
      }
    }, (err) => {
      console.log("Error: ", err);
    })
  }

  // this function gets the tappuntenlijst depending on the user that is logged in
  getTapPunten() {
    this.tp.getTapPunten(this.userloginname)
      .then(data => {
        this.tappunten = data;

        this.tappuntToDoCount = 0;
        this.tappuntTotalCount = this.tappunten.length;
        this.tappuntenOriginal = this.tappunten;
      }
      )
  }
}



