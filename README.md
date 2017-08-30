<h3 align="center">React Native Mesa da T.I Componentes</p> 

## Começando

### Como usar um componente ?

```js
import { Paginacao } from 'react-native-mesa-componentes';

<Paginacao
    paginaInicial={0}
    paginas={paginas}
    paginaAtual={(pagina)=>console.log("PÁGINA_ATUAL=>", pagina)}
/>
```

## Componentes 

- [x] [FiltroModal](https://github.com/MesaDaTI/react-native-mesa-componentes/blob/master/documentacao/API/filtromodal.md)
- [x] [Paginacao](https://github.com/MesaDaTI/react-native-mesa-componentes/blob/master/documentacao/API/paginacao.md)

## Contribua

### Como contribuir para o projeto ?

- Crie uma branch a partir da master com o nome do componente ou funcionalidade nova.
- Crie o pull request.

### Requisitos mínimos

1. Crie uma documentação para o seu componente em `documentacao/API/seucomponente.md`.
- Escreva uma introdução falando sobre o componente.
- Adicione uma imagem ou gif se seu componente tiver alguma animação.
- Crie uma tabela das propriedades, padrões, tipagem e descrição do componente.

2. Crie um arquivo de exemplo utilizando seu componente em `exemplos/ExemploSeuComponente.js`

### Encontrou alguma coisa errada e quer fazer a correção?

- Crie uma branch a partir da master com o nome da correção.
- Crie o pull request.


## A Mesa

Criamos este projeto para ajudar no dia a dia do programador, estaremos felizes em aceitar sugestões, correções ou funcionalidades novas (:

