// imported plugins
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

// imported pages
import { GecontroleerdPage } from './gecontroleerd';

@NgModule({
  declarations: [
    GecontroleerdPage,
  ],
  imports: [
    IonicPageModule.forChild(GecontroleerdPage),
  ],
})
export class GecontroleerdPageModule {}
