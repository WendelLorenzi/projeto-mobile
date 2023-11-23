import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder!: string;
  public eventsList!: any[];
  private activatedRoute = inject(ActivatedRoute);
  constructor() {}

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.eventsList = [
      {
        titulo: 'Evento 1',
        subtitulo: 'Subtítulo 1',
        data: '11/11/2023',
        descricao: 'Descrição do evento 1'
      },
      {
        titulo: 'Evento 2',
        subtitulo: 'Subtítulo 2',
        data: '12/11/2023',
        descricao: 'Descrição do evento 2'
      },
      {
        titulo: 'Evento 3',
        subtitulo: 'Subtítulo 3',
        data: '12/11/2023',
        descricao: 'Descrição do evento 3'
      },
      {
        titulo: 'Evento 4',
        subtitulo: 'Subtítulo 4',
        data: '12/11/2023',
        descricao: 'Descrição do evento 4'
      }
    ];
  }
}
