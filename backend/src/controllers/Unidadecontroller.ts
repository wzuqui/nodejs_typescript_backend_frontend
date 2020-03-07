import { Request, Response } from 'express';
import { injectable } from 'tsyringe';
import { controller, get } from './controller';

@injectable()
@controller('/unidades')
export class UnidadeController {
    @get('/')
    async index(_req: Request, res: Response) {
        return res.json([
            { nome: 'Ravex' }
        ]);
    }
};