import { IEventsRepository } from '../../repositories/IEventsRepository';
import { CreateEventDTO } from './CreateEventDTO';
import { Event } from '../../entities/Event';

export class CreateEventUseCase {
  constructor(private eventsRepository: IEventsRepository) {}

  async execute(data: CreateEventDTO) {
    const eventAlreadyExists = await this.eventsRepository.findById(data.id);

    if (eventAlreadyExists) {
      throw new Error('Event already exists.');
    }

    const event = new Event(data);

    await this.eventsRepository.save(event);
  }
}
