import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-event-register',
  templateUrl: './event-register.page.html',
  styleUrls: ['./event-register.page.scss'],
})
export class EventRegisterPage implements OnInit {

  event: {
    titulo: string;
    subtitulo: string;
    data: string;
    descricao: string;
    local: string;
    endereco: string;
    inicio: string;
    valor: string;
  } = {
    titulo: '',
    subtitulo: '',
    data: '',
    descricao: '',
    local: '',
    endereco: '',
    inicio: '',
    valor: ''
  };

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    const navigation = this.router.getCurrentNavigation();
    const state = navigation!.extras.state as {event: any};
    if (state) {
      this.event = state.event;
    }
   }

  goBack() {
    this.router.navigate(['/folder/Eventos']);
  }

}
