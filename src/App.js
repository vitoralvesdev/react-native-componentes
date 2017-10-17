import React, { Component } from 'react';
import {
  View,  
  Text,
  StyleSheet
} from 'react-native';
import ListaItem from './menu/ListaItem';

ITENS = [
    { nome: 'Item 1' },
    { nome: 'Item 2' },
    { nome: 'Item 3' },
    { nome: 'Item 4' },
    { nome: 'Item 5' },
    { nome: 'Item 6' },
    { nome: 'Item 7' },
    { nome: 'Item 8' },
    { nome: 'Item 9' },
    { nome: 'Item 10' },
    { nome: 'Item 1' },
    { nome: 'Item 2' },
    { nome: 'Item 3' },
    { nome: 'Item 4' },
    { nome: 'Item 5' },
    { nome: 'Item 6' },
    { nome: 'Item 7' },
    { nome: 'Item 8' },
    { nome: 'Item 9' },
    { nome: 'Item 10' }
];


export default class App extends Component {
    render() {
        return(
            <View style={estilos.corpo}>
                <ListaItem 
                    itens={ITENS}
                />      
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