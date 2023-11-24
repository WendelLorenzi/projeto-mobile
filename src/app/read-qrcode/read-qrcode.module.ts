import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReadQrcodePageRoutingModule } from './read-qrcode-routing.module';

import { ReadQrcodePage } from './read-qrcode.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReadQrcodePageRoutingModule
  ],
  declarations: [ReadQrcodePage]
})
export class ReadQrcodePageModule {}
