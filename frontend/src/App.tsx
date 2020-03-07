import React, { FormEvent, ChangeEvent } from 'react';
import { AxiosError } from 'axios';
import { ValidationError } from 'class-validator';

import api from './services/api';
import Pessoa from './components/Pessoa';
import { PropertyError, MessageErro } from './styles';

interface IPessoa {
  nome: string,
  email: string
}

class App extends React.Component<{}, { pessoas: IPessoa[], errors: ValidationError[] } & IPessoa> {
  constructor(props: any) {
    super(props);
    this.state = {
      pessoas: [],
      nome: '',
      email: '',
      errors: []
    }
  }

  componentDidMount() {
    this.load();
  }

  load() {
    api.get<IPessoa[]>('/pessoas').then(response => {
      this.setState({ pessoas: response.data });
    })
  }

  render() {
    return (
      <div className="App">
        {this.state.pessoas.map(pessoa => <Pessoa key={pessoa.email} pessoa={pessoa} />)}
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <label>Nome: <input name="nome" value={this.state.nome} onChange={(event) => this.handleChangeNome(event)} /></label><br />
          <label>E-mail: <input name="email" type="email" value={this.state.email} onChange={(event) => this.handleChangeEmail(event)} /></label>

          <input type="submit" value="Enviar" />

          {this.state.errors.map(erro => {
            return (
              <PropertyError>
                {erro.property} :
                {Object.values(erro.constraints).map(mensagem => {
                  return (
                    <MessageErro>{mensagem}</MessageErro>
                  )
                })}
              </PropertyError>
            )
          })}
        </form>
      </div>
    );
  }

  handleChangeNome(event: ChangeEvent<HTMLInputElement>) {
    this.setState({ nome: event.target.value });
  }

  handleChangeEmail(event: ChangeEvent<HTMLInputElement>) {
    this.setState({ email: event.target.value });
  }

  async handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    this.setState({ errors: [] })
    try {
      await api.post('/pessoas', this.state);
      this.load();
    } catch (error) {
      const axiosError: AxiosError<{ errors: ValidationError[] }> = error;
      if (axiosError.isAxiosError) {
        if (axiosError.response?.data?.errors) {
          this.setState({ errors: axiosError.response?.data?.errors })
        }
      }
    }
  }

}


export default App;
