import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'folder/:id',
    loadChildren: () =>
      import('./folder/folder.module').then((m) => m.FolderPageModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'registro',
    loadChildren: () =>
      import('./registro/registro.module').then((m) => m.RegistroModule),
  },
  {
    path: 'exit',
    loadChildren: () =>
      import('./folder/exit/exit.module').then((m) => m.ExitPageModule),
  },
  {
    path: 'read-qrcode',
    loadChildren: () =>
      import('./read-qrcode/read-qrcode.module').then(
        (m) => m.ReadQrcodePageModule
      ),
  },
  {
    path: 'event-form',
    loadChildren: () =>
      import('./folder/event-form/event-form.module').then(
        (m) => m.EventFormPageModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
