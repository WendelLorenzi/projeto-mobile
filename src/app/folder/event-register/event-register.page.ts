import { Component, OnInit } from '@angular/core';
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
  } = {
    titulo: '',
    subtitulo: '',
    data: '',
    descricao: '',
  };

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params: { event?: any }) => {
      if (params && params.event) {
        try {
          const eventData = JSON.parse(params.event);
          this.event = eventData;
        } catch (error) {
          console.error('Erro ao fazer o parse do JSON:', error);
        }
      }
    });
  }

  goBack() {
    this.router.navigate(['/folder/Eventos']);
  }

}
