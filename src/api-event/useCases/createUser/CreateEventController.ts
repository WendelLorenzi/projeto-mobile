import { Request, Response } from 'express';
import { CreateEventUseCase } from './createEventUseCase';

export class CreateEventController {
  constructor(private createEventUseCase: CreateEventUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const {
      id,
      titulo,
      subtitulo,
      data,
      descricao,
      local,
      endereco,
      inicio,
      valor,
    } = request.body;

    try {
      await this.createEventUseCase.execute({
        id,
        titulo,
        subtitulo,
        data,
        descricao,
        local,
        endereco,
        inicio,
        valor,
      });

      return response.status(201).send();
    } catch (err: any) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.',
      });
    }
  }
}
