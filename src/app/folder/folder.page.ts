import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder!: string;
  public eventsList!: any[];
  private activatedRoute = inject(ActivatedRoute);
  constructor(private router: Router) {}

  onCardClick(event: any) {
    this.router.navigate(['/folder/Eventos/event-register'], { state: { event: event } });
   }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.eventsList = [
      {
        titulo: 'Evento 1',
        subtitulo: 'Subtítulo 1',
        data: '11/11/2023',
        descricao: 'Descrição do evento 1',
        local: 'Batcaverna',
        endereco: 'Rua Piaui, 815',
        inicio: '19:00',
        valor: 'Grátis'
      },
      {
        titulo: 'Evento 2',
        subtitulo: 'Subtítulo 2',
        data: '12/11/2023',
        descricao: 'Descrição do evento 2',
        local: 'Toca do Cateto',
        endereco: 'Rua Piaui, 1015',
        inicio: '19:00',
        valor: 'Grátis'
      },
      {
        titulo: 'Evento 3',
        subtitulo: 'Subtítulo 3',
        data: '12/11/2023',
        descricao: 'Descrição do evento 3',
        local: 'Toca do Cateto',
        endereco: 'Rua Piaui, 1015',
        inicio: '19:00',
        valor: 'Grátis'
      },
      {
        titulo: 'Evento 4',
        subtitulo: 'Subtítulo 4',
        data: '12/11/2023',
        descricao: 'Descrição do evento 4',
        local: 'Batcaverna',
        endereco: 'Rua Piaui, 815',
        inicio: '19:00',
        valor: 'Grátis'
      }
    ];
  }
}
