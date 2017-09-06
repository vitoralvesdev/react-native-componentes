import React, { Component } from 'react';
import {
  View,  
  Text,
  StyleSheet
} from 'react-native';
import Busca from './busca/Busca';

export default class App extends Component {
    render() {
        return(
            <View style={estilos.corpo}>
                <Busca 
                    busca={(busca)=>console.log(busca)}
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
    },
    titulo: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    subTitulo: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
})
