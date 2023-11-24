import { PostgresEventsRepository } from '../../repositories/implementations/PostgresEventsRepository';
import { CreateEventUseCase } from './createEventUseCase';
import { CreateEventController } from './createEventController';

const postgresEventsRepository = new PostgresEventsRepository();

const createEventUseCase = new CreateEventUseCase(postgresEventsRepository);

const createEventController = new CreateEventController(createEventUseCase);

export { createEventUseCase, createEventController };
