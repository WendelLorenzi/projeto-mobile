import { Event } from '../entities/Event';

export interface IEventsRepository {
  findById(id: string): Promise<Event | undefined>;
  save(event: Event): Promise<void>;
}
