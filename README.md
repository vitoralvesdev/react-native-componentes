<h3 align="center">React Native Componentes</p> 

## Começando

### Como usar um componente ?

```js
import { Paginacao } from 'react-native-componentes';

<Paginacao
    paginaInicial={0}
    paginas={paginas}
    paginaAtual={(pagina)=>console.log("PÁGINA ATUAL=>", pagina)}
/>
```

## Componentes 

- [x] [Busca](https://github.com/vitoralvesdev/react-native-componentes/blob/master/documentacao/API/busca.md)
- [x] [Carousel](https://github.com/vitoralvesdev/react-native-componentes/blob/master/documentacao/API/carousel.md)
- [x] [Carregando](https://github.com/vitoralvesdev/react-native-componentes/blob/master/documentacao/API/carregando.md)
- [x] [FiltroModal](https://github.com/vitoralvesdev/react-native-componentes/blob/master/documentacao/API/filtromodal.md)
- [x] [GaleriaFotos](https://github.com/vitoralvesdev/react-native-componentes/blob/master/documentacao/API/galeriafotos.md)
- [x] [Header](https://github.com/vitoralvesdev/react-native-componentes/blob/master/documentacao/API/header.md)
- [ ] Menu
- [x] [Paginacao](https://github.com/vitoralvesdev/react-native-componentes/blob/master/documentacao/API/paginacao.md)
- [ ] Swiper
- [x] [VerMaisTexto](https://github.com/vitoralvesdev/react-native-componentes/blob/master/documentacao/API/vermaistexto.md)

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


## Objetivo com o projeto

Criei este projeto para ajudar no dia a dia do programador, estou feliz em aceitar sugestões, correções ou funcionalidades novas (:

