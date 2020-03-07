import { injectable } from 'tsyringe';

interface IEmailServiceTo {
    nome: string,
    email: string;
}

interface IEmailServiceMessage {
    assunto: string;
    corpo: string;
    anexos?: string[]
}

interface IEmailServiceParams {
    para: IEmailServiceTo,
    mensagem: IEmailServiceMessage
}

injectable()
export class EmailService {
    enviarEmail({ para, mensagem }: IEmailServiceParams) {
        console.log(`Email enviado para ${para.nome}: ${mensagem.assunto}`);
    }
}