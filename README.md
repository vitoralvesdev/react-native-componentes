<p align="center">
    <img alt="react-native-swiper" src="https://raw.githubusercontent.com/vitoralvesdev/react-native-componentes/c7e7a24a79959e38b2a051faafd1790fc8be844b/src/imgs/react-native-componentes-vitor-alves.jpg">
</p>

</br>

<p align="center">
  <a href="https://www.npmjs.com/package/react-native-componentes"><img src="https://img.shields.io/badge/npm-0.0.11-orange.svg"></a>
</p>

 
## Instalação

```js
$ npm install --save react-native-components 
```

## Começando

### Como usar um componente ?

```js
import { Header, VerMaisTexto } from 'react-native-componentes';

return(
    <View>
        <Header titulo="React Native Componentes" />
        <VerMaisTexto numeroLinhas={2}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam odio eros, auctor nec dignissim eget, condimentum in ante. In euismod laoreet molestie. Nullam dictum sed turpis vel imperdiet. Donec vel metus sed nisl mattis blandit. Sed non elit nisl. 
        </VerMaisTexto>     
    </View>
)
```

## Componentes 

- [x] [AlbumFotos](https://github.com/vitoralvesdev/react-native-componentes/blob/master/documentacao/API/albumfotos.md)
- [x] [Busca](https://github.com/vitoralvesdev/react-native-componentes/blob/master/documentacao/API/busca.md)
- [x] [Carousel](https://github.com/vitoralvesdev/react-native-componentes/blob/master/documentacao/API/carousel.md)
- [x] [Carregando](https://github.com/vitoralvesdev/react-native-componentes/blob/master/documentacao/API/carregando.md)
- [x] [FiltroModal](https://github.com/vitoralvesdev/react-native-componentes/blob/master/documentacao/API/filtromodal.md)
- [x] [GaleriaFotos](https://github.com/vitoralvesdev/react-native-componentes/blob/master/documentacao/API/galeriafotos.md)
- [x] [Header](https://github.com/vitoralvesdev/react-native-componentes/blob/master/documentacao/API/header.md)
- [x] [MenuItem](https://github.com/vitoralvesdev/react-native-componentes/blob/master/documentacao/API/menuitem.md)
- [x] [Paginacao](https://github.com/vitoralvesdev/react-native-componentes/blob/master/documentacao/API/paginacao.md)
- [x] [VerMaisTexto](https://github.com/vitoralvesdev/react-native-componentes/blob/master/documentacao/API/vermaistexto.md)
- [ ] SwiperMenu

## Atualizações

- [V0.0.7](https://github.com/vitoralvesdev/react-native-componentes/releases/tag/0.0.7) - Novos componentes para integrar com seu projeto.
- [V0.0.9](https://github.com/vitoralvesdev/react-native-componentes/releases/tag/0.0.9) - Correção de diversos bugs do Carousel.
- [V0.0.10](https://github.com/vitoralvesdev/react-native-componentes/releases/tag/0.0.10) - Nova propriedade no Carousel.
- [V0.0.11](https://github.com/vitoralvesdev/react-native-componentes/releases/tag/0.0.11) - Correção de diversos bugs. Header agora é animado.

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

