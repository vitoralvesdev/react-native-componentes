import React, { Component } from 'react';
import {
  View,  
  StyleSheet
} from 'react-native';
import { Header } from 'react-native-components';

export default class ExemploHeader extends Component {
    render() {
        return(
            <View style={estilos.corpo}>
                <Header titulo="React Native Componentes" />      
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
    }
})
