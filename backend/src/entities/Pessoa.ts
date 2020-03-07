import Entity from "./Entity";
import { IsEmail, IsNotEmpty, MaxLength } from "class-validator";

export default class Pessoa extends Entity {
    @IsNotEmpty()
    @MaxLength(20)
    public nome: string;

    @IsNotEmpty()
    @IsEmail()
    public email: string;

    constructor(pessoa: Partial<Pessoa>) {
        super();
        this.nome = pessoa?.nome as string;
        this.email = pessoa?.email as string;
    }
}