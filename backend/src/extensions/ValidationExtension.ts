import { ValidationTypes, ValidationArguments } from "class-validator";

ValidationTypes.getMessage = (type: string, isEach: boolean): string | ((args: ValidationArguments) => string) => {
    const eachPrefix = isEach ? "cada valor em " : "";
    switch (type) {

        /* system chceck */
        case ValidationTypes.NESTED_VALIDATION:
            return eachPrefix + "propriedade aninhada $property deve ser objeto ou matriz";
        /* common checkers */
        case ValidationTypes.IS_DEFINED:
            return eachPrefix + "$property não deve ser nulo ou indefinido";
        case ValidationTypes.EQUALS:
            return eachPrefix + "$property deve ser igual a $constraint1";
        case ValidationTypes.NOT_EQUALS:
            return eachPrefix + "$property não deve ser igual a $constraint1";
        case ValidationTypes.IS_EMPTY:
            return eachPrefix + "$property deve estar vazio";
        case ValidationTypes.IS_NOT_EMPTY:
            return eachPrefix + "$property não deve estar vazio";
        case ValidationTypes.IS_IN:
            return eachPrefix + "$property deve ser um dos seguintes valores: $constraint1";
        case ValidationTypes.IS_NOT_IN:
            return eachPrefix + "$property não deve ser um dos seguintes valores: $constraint1";
        case ValidationTypes.IS_PORT:
            return eachPrefix + "$property deve ser uma porta";

        /* type checkers */
        case ValidationTypes.IS_BOOLEAN:
            return eachPrefix + "$property deve ser um valor booleano";
        case ValidationTypes.IS_DATE:
            return eachPrefix + "$property deve ser uma instância de data";
        case ValidationTypes.IS_NUMBER:
            return eachPrefix + "$property deve ser um número em conformidade com as restrições especificadas";
        case ValidationTypes.IS_INT:
            return eachPrefix + "$property deve ser um número inteiro";
        case ValidationTypes.IS_STRING:
            return eachPrefix + "$property deve ser uma string";
        case ValidationTypes.IS_DATE_STRING:
            return eachPrefix + "$property deve ser um ISOString";
        case ValidationTypes.IS_ARRAY:
            return eachPrefix + "$property deve ser uma matriz";
        case ValidationTypes.IS_ENUM:
            return eachPrefix + "$property deve ser um valor de enum válido";

        /* number checkers */
        case ValidationTypes.IS_DIVISIBLE_BY:
            return eachPrefix + "$property deve ser divisível por $constraint1";
        case ValidationTypes.IS_POSITIVE:
            return eachPrefix + "$property deve ser um número positivo";
        case ValidationTypes.IS_NEGATIVE:
            return eachPrefix + "$property deve ser um número negativo";
        case ValidationTypes.MIN:
            return eachPrefix + "$property não deve ser menor que $constraint1";
        case ValidationTypes.MAX:
            return eachPrefix + "$property não deve ser maior que $constraint1";

        /* date checkers */
        case ValidationTypes.MIN_DATE:
            return "data mínima permitida para" + eachPrefix + "$property é $constraint1";
        case ValidationTypes.MAX_DATE:
            return "data máxima permitida para" + eachPrefix + "$property é $constraint1";

        /* string-as-type checkers */
        case ValidationTypes.IS_BOOLEAN_STRING:
            return eachPrefix + "$property deve ser uma sequência booleana";
        case ValidationTypes.IS_NUMBER_STRING:
            return eachPrefix + "$property deve ser uma sequência numérica";

        /* string checkers */
        case ValidationTypes.CONTAINS:
            return eachPrefix + "$property deve conter um $constraint1 string";
        case ValidationTypes.NOT_CONTAINS:
            return eachPrefix + "$property não deve conter um $constraint1 string";
        case ValidationTypes.IS_ALPHA:
            return eachPrefix + "$property deve conter apenas letras (a-zA-Z)";
        case ValidationTypes.IS_ALPHANUMERIC:
            return eachPrefix + "$property deve conter apenas letras e números";
        case ValidationTypes.IS_DECIMAL:
            return eachPrefix + "$property não é um número decimal válido";
        case ValidationTypes.IS_ASCII:
            return eachPrefix + "$property deve conter apenas caracteres ASCII";
        case ValidationTypes.IS_BASE64:
            return eachPrefix + "$property deve ser codificado em base64";
        case ValidationTypes.IS_BYTE_LENGTH:
            return eachPrefix + "$property's byte length must fall into ($constraint1, $constraint2) range";
        case ValidationTypes.IS_CREDIT_CARD:
            return eachPrefix + "$property deve ser um cartão de crédito";
        case ValidationTypes.IS_CURRENCY:
            return eachPrefix + "$property deve ser uma moeda";
        case ValidationTypes.IS_EMAIL:
            return eachPrefix + "$property deve ser um e-mail";
        case ValidationTypes.IS_FQDN:
            return eachPrefix + "$property deve ser um nome de domínio válido";
        case ValidationTypes.IS_FULL_WIDTH:
            return eachPrefix + "$property deve conter caracteres de largura total";
        case ValidationTypes.IS_HALF_WIDTH:
            return eachPrefix + "$property deve conter caracteres de meia largura";
        case ValidationTypes.IS_VARIABLE_WIDTH:
            return eachPrefix + "$property deve conter caracteres de largura total e meia largura";
        case ValidationTypes.IS_HEX_COLOR:
            return eachPrefix + "$property deve ser uma cor hexadecimal";
        case ValidationTypes.IS_HEXADECIMAL:
            return eachPrefix + "$property deve ser um número hexadecimal";
        case ValidationTypes.IS_MAC_ADDRESS:
            return eachPrefix + "$property deve ser um endereço MAC";
        case ValidationTypes.IS_IP:
            return eachPrefix + "$property deve ser um endereço IP";
        case ValidationTypes.IS_ISBN:
            return eachPrefix + "$property deve ser um ISBN";
        case ValidationTypes.IS_ISIN:
            return eachPrefix + "$property deve ser um ISIN (identificador de estoque / segurança)";
        case ValidationTypes.IS_ISO8601:
            return eachPrefix + "$property deve ser uma sequência de datas ISO 8601 válida";
        case ValidationTypes.IS_JSON:
            return eachPrefix + "$property deve ser uma string json";
        case ValidationTypes.IS_JWT:
            return eachPrefix + "$property deve ser uma sequência jwt";
        case ValidationTypes.IS_OBJECT:
            return eachPrefix + "$property deve ser um objeto";
        case ValidationTypes.IS_NOT_EMPTY_OBJECT:
            return eachPrefix + "$property deve ser um objeto não vazio";
        case ValidationTypes.IS_LOWERCASE:
            return eachPrefix + "$property deve ser uma sequência minúscula";
        case ValidationTypes.IS_MOBILE_PHONE:
            return eachPrefix + "$property deve ser um número de telefone";
        case ValidationTypes.IS_PHONE_NUMBER:
            return eachPrefix + "$property deve ser um número de telefone válido";
        case ValidationTypes.IS_ISO31661_ALPHA_2:
            return eachPrefix + "$property deve ser um código ISO31661 Alpha2 válido";
        case ValidationTypes.IS_ISO31661_ALPHA_3:
            return eachPrefix + "$property deve ser um código ISO31661 Alpha3 válido";
        case ValidationTypes.IS_LATLONG:
            return eachPrefix + "$property deve ser uma sequência de latitude e longitude";
        case ValidationTypes.IS_LATITUDE:
            return eachPrefix + "$property deve ser uma sequência ou número de latitude";
        case ValidationTypes.IS_LONGITUDE:
            return eachPrefix + "$property deve ser uma sequência ou número de longitude";
        case ValidationTypes.IS_MONGO_ID:
            return eachPrefix + "$property deve ser um ID mongodb";
        case ValidationTypes.IS_MULTIBYTE:
            return eachPrefix + "$property deve conter um ou mais caracteres multibyte";
        case ValidationTypes.IS_SURROGATE_PAIR:
            return eachPrefix + "$property deve conter quaisquer caracteres substitutos de pares";
        case ValidationTypes.IS_URL:
            return eachPrefix + "$property deve ser um endereço de URL";
        case ValidationTypes.IS_UUID:
            return eachPrefix + "$property deve ser um UUID";
        case ValidationTypes.IS_UPPERCASE:
            return eachPrefix + "$property deve estar em maiúsculas";
        case ValidationTypes.LENGTH:
            return (args: ValidationArguments) => {
                const isMinLength = args.constraints[0] !== null && args.constraints[0] !== undefined;
                const isMaxLength = args.constraints[1] !== null && args.constraints[1] !== undefined;
                if (isMinLength && (!args.value || args.value.length < args.constraints[0])) {
                    return eachPrefix + "$property deve ser maior ou igual a $constraint1 caracteres";
                } else if (isMaxLength && (args.value.length > args.constraints[1])) {
                    return eachPrefix + "$property deve ser menor que ou igual a $constraint2 caracteres";
                }
                return eachPrefix + "$property deve ser maior ou igual a $constraint1 e menor ou igual a $constraint2 caracteres";
            };
        case ValidationTypes.MIN_LENGTH:
            return eachPrefix + "$property deve ser maior ou igual a $constraint1 caracteres";
        case ValidationTypes.MAX_LENGTH:
            return eachPrefix + "$property deve ser menor que ou igual a $constraint1 caracteres";
        case ValidationTypes.MATCHES:
            return eachPrefix + "$property deve combinar $constraint1 expressão regular";
        case ValidationTypes.IS_MILITARY_TIME:
            return eachPrefix + "$property deve ser uma representação válida do horário militar no formato HH:MM";
        case ValidationTypes.IS_HASH:
            return eachPrefix + "$property deve ser um hash do tipo $constraint1";
        case ValidationTypes.IS_ISSN:
            return eachPrefix + "$property deve ser um ISSN";

        /* array checkers */
        case ValidationTypes.ARRAY_CONTAINS:
            return eachPrefix + "$property deve conter $constraint1 valores";
        case ValidationTypes.ARRAY_NOT_CONTAINS:
            return eachPrefix + "$property não deve conter $constraint1 valores";
        case ValidationTypes.ARRAY_NOT_EMPTY:
            return eachPrefix + "$property não deve estar vazio";
        case ValidationTypes.ARRAY_MIN_SIZE:
            return eachPrefix + "$property deve conter pelo menos $constraint1 elementos";
        case ValidationTypes.ARRAY_MAX_SIZE:
            return eachPrefix + "$property deve conter no máximo $constraint1 elementos";
        case ValidationTypes.ARRAY_UNIQUE:
            return eachPrefix + "Todos os elementos da $property's devem ser exclusivos";

        case ValidationTypes.IS_INSTANCE:
            return (args: ValidationArguments) => {
                if (args.constraints[0]) {
                    return eachPrefix + `$property deve ser uma instância de ${args.constraints[0].name}`;
                } else {
                    return eachPrefix + `${ValidationTypes.IS_INSTANCE} decorador espera e objeto como valor, mas obteve valor falso.`;
                }
            };
    }

    return "";
}