import React, { Component } from 'react';
import {
  View,  
  Text
} from 'react-native';
import GaleriaFotos from 'react-native-componentes';

export default class ExemploGaleriaFotos extends Component {
    render() {
        return(
            <View>
                <GaleriaFotos 
                    capa="https://i.imgur.com/mcT43dV.jpg"
                    titulo="Fotos de Terror"
                    qtdFotos={10}
                /> 
            </View>
        )
    }
}
