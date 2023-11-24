import { v4 as uuid } from 'uuid';

export class Event {
  public readonly id: string;

  public titulo: string = '';
  public subtitulo: string = '';
  public data: string = '';
  public descricao: string = '';
  public local: string = '';
  public endereco: string = '';
  public inicio: string = '';
  public valor: string = '';

  constructor(props: Omit<Event, 'id'>, id?: string) {
    this.id = id || uuid();
    Object.assign(this, props);
  }
}
