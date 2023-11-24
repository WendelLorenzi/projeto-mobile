import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserQrcodePageRoutingModule } from './user-qrcode-routing.module';

import { UserQrcodePage } from './user-qrcode.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserQrcodePageRoutingModule
  ],
  declarations: [UserQrcodePage]
})
export class UserQrcodePageModule {}
