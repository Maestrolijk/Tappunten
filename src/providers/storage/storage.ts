import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Storage } from '@ionic/storage';

/*
  Generated class for the StorageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class StorageProvider {

  constructor(public http: HttpClient,
    public storage: Storage) {
    console.log('Hello StorageProvider Provider');
  }

  setData(key, value) {
    this.storage.ready().then(() => { // Check if the storage ready for accessing   
      this.storage.set(key, value)
    });
  }

  getData(key): Promise<any> {
    return new Promise(resolve => {
      this.storage.ready().then(() => { // Check if the storage ready for accessing   
        this.storage.get(key)
          .then((value) => {
            // console.log("Value for ", key, "is : ", value);
            resolve(value);
          }
          );
      });
    });
  }

}
