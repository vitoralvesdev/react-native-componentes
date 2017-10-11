import React, { Component } from 'react';
import {
  View,  
  Text,
  StyleSheet
} from 'react-native';
import { Busca } from 'react-native-componentes';

const DATA = [
    { id: 0, nome: "Vitor" },
    { id: 0, nome: "Hugo" },
    { id: 0, nome: "Alves" }
];

export default class ExemploBusca extends Component {
    render() {
        return(
            <View style={estilos.corpo}>
                <Busca 
                    filtro={DATA}
                    filtroSelecionado={filtro=>console.log(filtro)}
                    busca={busca=>console.log(busca)} 
                />      
            </View>
        )
    }
}

const estilos = StyleSheet.create({
    corpo: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    }
})
