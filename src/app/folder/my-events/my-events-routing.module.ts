import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyEventsPage } from './my-events.page';

const routes: Routes = [
  {
    path: '',
    component: MyEventsPage
  },
  {
    path: 'user-qrcode',
    loadChildren: () => import('./user-qrcode/user-qrcode.module').then( m => m.UserQrcodePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyEventsPageRoutingModule {}
