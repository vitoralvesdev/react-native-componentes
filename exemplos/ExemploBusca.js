import React, { Component } from 'react';
import {
  View,  
  Text,
  StyleSheet
} from 'react-native';
import Busca from 'react-native-componentes';

export default class ExemploBusca extends Component {
    render() {
        return(
            <View style={estilos.corpo}>
                <Busca busca={(busca)=>console.log(busca)} />      
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
