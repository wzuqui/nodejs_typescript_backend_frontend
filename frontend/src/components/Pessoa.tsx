import React from 'react';

interface IPessoa {
    nome: string,
    email: string
}

interface Props {
    pessoa: IPessoa
}

const Pessoa: React.FC<Props> = ({ pessoa }) => {
    return (
        <div>
            <strong>Nome: </strong> {pessoa.nome} <br />
            <strong>Email: </strong> {pessoa.email} <br /><br />
        </div>
    );
}

export default Pessoa;