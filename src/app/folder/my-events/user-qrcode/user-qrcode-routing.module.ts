import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserQrcodePage } from './user-qrcode.page';

const routes: Routes = [
  {
    path: '',
    component: UserQrcodePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserQrcodePageRoutingModule {}
