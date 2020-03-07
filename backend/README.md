
# Para iniciar o projeto em modo debug
```prompt
yarn debug
```
# Para debugar no Visual Studio Code
Para sebugar basta colocar o breakpoint na linha escolhida no vscode e teclar F5.
Este projeto foi configurado para funcionar com o vscode, após iniciar o 'yarn debug'.

## Utilização de injeção de dependência
Para criar controllers com injeção de dependencia basta colocar o decorator @inject na classe desesjada

## Auto instância das controllers
Este projeto foi configurado para automaticamente criar as rotas nas controllers, para isso deve-se adicionar o @inject na controller
e o @controller

### Rotas nas controllers para 'get' | 'post' | 'delete' | 'options' | 'put'
Basta utilizar o decorator @get ou @post, demais decoratos ainda não foram criados, mas basta adicionar os mesmos na classe controller.ts
