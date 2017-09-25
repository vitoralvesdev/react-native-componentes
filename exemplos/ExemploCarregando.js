import React, { Component } from 'react';
import {
  View,  
  Text
} from 'react-native';
import { Carregando } from 'react-native-componentes';

export default class ExemploCarregando extends Component {
    render() {
        return(
            <View>
                <Carregando />     
            </View>
        )
    }
}