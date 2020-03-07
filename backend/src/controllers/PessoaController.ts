import { Request, Response } from 'express';
import { injectable, autoInjectable } from 'tsyringe';
import { ValidationTypes, ValidationError } from 'class-validator';

import { EmailService } from '../services/EmailService';

import Pessoa from '../entities/Pessoa';
import Entity from '../entities/Entity';
import nameof from '../nameof';
import { controller, get, post } from './controller';

const pessoas: Partial<Pessoa>[] = [
    { nome: 'Willian Luis Zuqui', email: 'willianluiszuqui@gmail.com' }
];

@injectable()
@controller('/pessoas')
export class PessoaController {

    constructor(private _emailService: EmailService) {
    }

    @get('/')
    async index(_req: Request, res: Response) {
        return res.json(pessoas);
    }

    @post('/')
    async create(req: Request, res: Response) {
        let pessoa = new Pessoa(req.body);
        let erros = await pessoa.EhValido();

        if (pessoas.some(p => p.email == pessoa.email)) {
            if (erros.length === 0 || erros.every(p => p.property === nameof<Pessoa>('email'))) {
                erros.push({
                    property: nameof<Pessoa>('email'),
                    children: [],
                    constraints: {},
                });
            }
            const valida = erros.find(p => p.property === nameof<Pessoa>('email'));
            if (valida) {
                valida.property = nameof<Pessoa>('email');
                valida.constraints[ValidationTypes.ARRAY_UNIQUE] = 'email deve ser único';
            }
        }
        if (erros.length > 0) {
            res.status(400).json({ errors: erros });
            return;
        }

        pessoas.push(pessoa);

        this._emailService.enviarEmail({
            para: { nome: 'Willian Luis Zuqui', email: 'willianluiszuqui@gmail.com' },
            mensagem: { assunto: 'Bem-vindo ao sistema', corpo: 'Seja bem-vindo' }
        });
        return res.json('Bem vindo')
    }
};