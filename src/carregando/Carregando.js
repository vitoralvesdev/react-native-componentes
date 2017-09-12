import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

export default class Carregando extends Component {
    render() {
        return(
            <View style={estilos.corpo}>
                <Text style={estilos.carregando}>Carregando...</Text>
            </View>
        )
    }
}

const estilos = StyleSheet.create({
    corpo : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }, 
    carregando : {
        color: '#000000',
        fontSize: 20
    }
})