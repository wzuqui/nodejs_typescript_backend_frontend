import { validate, ValidationError } from "class-validator";

import '../extensions/ValidationExtension';

export default class Entity {
    public async EhValido(): Promise<ValidationError[]> {
        return await validate(this);
    }
}
