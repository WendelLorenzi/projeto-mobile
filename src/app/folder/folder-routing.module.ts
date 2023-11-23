import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FolderPage } from './folder.page';

const routes: Routes = [
  {
    path: '',
    component: FolderPage
  },  {
    path: 'event-form',
    loadChildren: () => import('./event-form/event-form.module').then( m => m.EventFormPageModule)
  },
  {
    path: 'event-register',
    loadChildren: () => import('./event-register/event-register.module').then( m => m.EventRegisterPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FolderPageRoutingModule {}
