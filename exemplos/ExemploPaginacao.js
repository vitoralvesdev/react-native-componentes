import React, { Component } from 'react';
import { Paginacao } from 'react-native-componentes';

const paginas = [
    { pagina: 0, titulo: 'Página Um' },
    { pagina: 1, titulo: 'Página Dois' },
    { pagina: 2, titulo: 'Página Três' },
    { pagina: 3, titulo: 'Última página' },
];

export default class ExemploPaginacao extends Component {
    render() {
        return (
            <Paginacao
                paginaInicial={0}
                paginas={paginas}
                paginaAtual={(pagina)=>console.log("PÁGINA_ATUAL=>", pagina)}
            />
        )
    }
} 