import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the TapPuntApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TappuntWeeklijstProvider {

  constructor(public http: HttpClient) {
  }

  private headNoOpt = new HttpHeaders({
    'Content-Type' :  'text/plain'    
  });


setTapPuntGespoeld(autoID: number){
  return new Promise(resolve => { 
    let url: string = 'http://10.254.3.15/tapPunten/TapApi/weeklijst/del/' + autoID;
    //let url: string = 'http://dzapontw02.dz.local/tapPunten/TapApi/weeklijst/geurinkj'
    //let url: string = 'http://localhost:54217/TapApi/weeklijst/del/' + autoID;
                       

    // this.http.get(url,{headers: this.haders})
    this.http.delete(url,{headers: this.headNoOpt})
      .subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
  });

}

  // get the tappuntenlijst from the database depending on the user that is logged in
  getTapPunten(gebruiker: string) {

    return new Promise(resolve => {   
      let url: string = 'http://10.254.3.15/tapPunten/TapApi/weeklijst/' + gebruiker;
      //let url: string = 'http://dzapontw02.dz.local/tapPunten/TapApi/weeklijst/geurinkj'
      //let url: string = 'http://localhost:54217/TapApi/weeklijst/' + gebruiker;
      //http://localhost:54217/TapApi/weeklijst/geurinkj

      this.http.get(url)
      this.http.get(url)
        .subscribe(data => {
          resolve(data);
        }, err => {
          console.log(err);
        });
    });
  }

}
