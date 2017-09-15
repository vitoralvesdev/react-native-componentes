import React, { Component } from 'react';
import {
  View,  
  Text,
  StyleSheet
} from 'react-native';
import Header from './header/Header';

export default class App extends Component {
    render() {
        return(
            <View style={estilos.corpo}>
                <Header titulo="React Native Componentes" />
                <Text style={estilos.subTitulo}>
                    ./src/ * Para todos os componentes
                </Text>
                <Text style={estilos.subTitulo}>
                    ./exemplos/ * Para todos os exemplos
                </Text>      
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
