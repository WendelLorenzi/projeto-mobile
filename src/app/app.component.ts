import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Eventos', url: '/folder/Eventos' },
    { title: 'Cadastrar Eventos', url: '/folder/Eventos/event-form' },
    { title: 'Meus Eventos', url: '/folder/Eventos/my-events' },
    { title: 'Ler QrCode', url: '/read-qrcode' },
    { title: 'Sair', url: '/' },
  ];
  constructor() {}
}
