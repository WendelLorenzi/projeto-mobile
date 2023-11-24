import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-events',
  templateUrl: './my-events.page.html',
  styleUrls: ['./my-events.page.scss'],
})
export class MyEventsPage implements OnInit {
  public eventList!: any[];

  constructor(private router: Router) { }

  onCardClick(event: any) {
    this.router.navigate(['/folder/Eventos/my-events/user-qrcode'], { state: { qrcode: event.qrcode } });
   }

  ngOnInit() {
    this.eventList = [
      {
        titulo: 'Evento 1',
        subtitulo: 'Subtítulo 1',
        data: '11/11/2023',
        descricao: 'Descrição do evento 1',
        local: 'Batcaverna',
        endereco: 'Rua Piaui, 815',
        inicio: '19:00',
        valor: 'Grátis',
        qrcode: 'https://github.com/WendelLorenzi/projeto-SD/assets/38894557/0fa17c38-2479-4c40-a342-559b90e5a098'
      },
      {
        titulo: 'Evento 2',
        subtitulo: 'Subtítulo 2',
        data: '12/11/2023',
        descricao: 'Descrição do evento 2',
        local: 'Toca do Cateto',
        endereco: 'Rua Piaui, 1015',
        inicio: '19:00',
        valor: 'Grátis',
        qrcode: ''
      },
    ];
  }

  goBack() {
    this.router.navigate(['/folder/Eventos']);
  }

}
