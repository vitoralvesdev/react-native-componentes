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
            <Header titulo="React Native Componentes">
                <View style={estilos.corpo}>
                    <Text style={estilos.subTitulo}>
                        ./src/ * Para todos os componentes
                    </Text>
                    <Text style={estilos.subTitulo}>
                        ./exemplos/ * Para todos os exemplos
                    </Text>     
                </View>
            </Header>     
        )
    }
}

const estilos = StyleSheet.create({
    corpo : {
        flex: 1,
        margin: 100
    },
    subTitulo : {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5
    }
})