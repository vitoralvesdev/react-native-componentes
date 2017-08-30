import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class reactNativeMesaComponentes extends Component {
    render() {
        return(
            <View style={estilos.corpo}>
                <Text style={estilos.titulo}>
                    Mesa da T.I Componentes
                </Text>
                <Text style={estilos.subTitulo}>
                    ./src/componentes/ * Para todos os componentes
                </Text>
                <Text style={estilos.subTitulo}>
                    ./exemplos/ * Para todos os exemplos
                </Text>
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
    subTitulo: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

AppRegistry.registerComponent('reactNativeMesaComponentes', () => reactNativeMesaComponentes);
