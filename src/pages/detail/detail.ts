// imported plugins
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';

// imported pipes
import { SafePipe } from '../../pipes/safe-html/safe-html';

// imported providers
import { StorageProvider } from '../../providers/storage/storage';
import { TappuntWeeklijstProvider } from '../../providers/tappunt-weeklijst/tappunt-weeklijst';

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {

  // variables
  tappuntDetail: any;
  img = "data:image/jpeg;base64,/9j/";
  myphoto: string;

  constructor(
    public navCtrl: NavController,
    public params: NavParams,
    private camera: Camera,
    public storageProvider: StorageProvider,
    public tp: TappuntWeeklijstProvider,
    public viewCtrl: ViewController) {
    this.tappuntDetail = params.get('tappuntenDetails');
  }

  ionViewDidLoad() {
    this.loadDataPhoto();
  }

  // close the modal screen
  doClose() {
    this.viewCtrl.dismiss();
  }

  // take the picture with back camera
  takePhoto() {
    const options: CameraOptions = {
      quality: 70,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      cameraDirection: 0
    }

    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64:
      this.myphoto = 'data:image/jpeg;base64,' + imageData;
      // write the picture to tappunt
      this.tp.setTapPuntPicture(this.tappuntDetail.tapPuntId, this.myphoto);
    }, (err) => {
      // Handle error
    });
  }

  loadDataPhoto() {

    this.storageProvider.getData("myphotostorage").then((val) => {
      if (val != null) {
        this.myphoto = val;
      }
      else {
        this.myphoto = "assets/imgs/noimage.png";
      }
    }), err => {
      console.log("fout")
    }

  }
}
