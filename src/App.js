import React, { Component } from 'react';
import {
  View,  
  Text,
  StyleSheet
} from 'react-native';
import Header from './header/Header';
import Carregando from './carregando/Carregando';

export default class App extends Component {
    render() {
        return(
            <View style={estilos.corpo}>
                <Carregando />     
            </View>
        )
    }
}

const estilos = StyleSheet.create({
    corpo : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    subTitulo : {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    }
})
