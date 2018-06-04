import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TappuntWeeklijstProvider } from '../../providers/tappunt-weeklijst/tappunt-weeklijst';

/**
 * Generated class for the TappuntenapiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tappuntenapi',
  templateUrl: 'tappuntenapi.html',
})
export class TappuntenapiPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public tp: TappuntWeeklijstProvider) {
  }

  tappunten: any;
  responseMesg: string;
  tappuntTotalCount: any;

  ionViewDidLoad() {
    console.log('ionViewDidLoad TapPuntenPage');
    this.getTapPunten();
  }


spoelTapPunt(){
  this.tp.setTapPuntGespoeld(23)
  .then(data => {
        console.log( data)

  })


}

  getTapPunten() {
    this.tp.getTapPunten('wiltinkg')
      .then(data => { 
        //let aap: string = JSON.stringify(data);
        this.tappunten = data;
        //this.tappunten = JSON.parse(aap);

        this.tappuntTotalCount = this.tappunten.length;
         
        console.log(this.tappuntTotalCount)
      }
      )
  }
}

