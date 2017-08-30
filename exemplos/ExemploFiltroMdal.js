import React, { Component } from 'react';
import { FiltroModal } from 'react-native-componentes';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import FiltroModal from '../src/filtromodal/FiltroModal';

const filtros = [
    {id: 0, filtro: 'Homem Aranha'},
    {id: 1, filtro: 'Homem de Ferro'},
    {id: 2, filtro: 'Loki'},
    {id: 3, filtro: 'Thor'},
    {id: 4, filtro: 'Hulk'},
    {id: 5, filtro: 'Homem Libélula'}
];

export default class FiltroModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filtroModal: false
        }
    }

    filtroSelecionado(filtro) {
        this.setState({filtroModal: false})
        console.log("FILTRO_SELECIONADO=>", filtro)
    }
    
    render() {
        return (
            <View style={estilos.corpo}>           
                <TouchableOpacity onPress={()=>this.setState({filtroModal:true})}>
                    <Text style={estilos.titulo}>Abrir Filtro</Text>
                </TouchableOpacity>
     
                <FiltroModal 
                    titulo="Selecione um Herói"
                    abrir={this.state.filtroModal}
                    fechar={()=>this.setState({filtroModal:false})}
                    filtros={filtros}
                    filtroSelecionado={(filtro)=>this.filtroSelecionado(filtro)}
                />
            </View>
        );
    }
}

const estilos = StyleSheet.create({
    corpo: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    titulo: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});