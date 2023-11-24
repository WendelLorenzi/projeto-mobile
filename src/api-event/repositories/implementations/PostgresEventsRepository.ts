import { IEventsRepository } from '../IEventsRepository';
import { Event } from '../../entities/Event';

export class PostgresEventsRepository implements IEventsRepository {
  private events: Event[] = [];

  async findById(id: string): Promise<Event | undefined> {
    const event = this.events.find((event) => event.id === id);

    return event;
  }

  async save(event: Event): Promise<void> {
    this.events.push(event);
  }
}
