import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Dimensions
} from 'react-native';
import Carousel from './carousel/Carousel';

const { width, height } = Dimensions.get('window');

export default class ExemploCarousel extends Component {
    render() {
        return(
            <Carousel
                paginaInicial={0}
                paginaAtual={(paginaAtual)=> console.log(paginaAtual)}
            >
                <View style={estilos.pagina1}></View>
                <View style={estilos.pagina2}></View>
                <View style={estilos.pagina3}></View>
            </Carousel> 
        )
    }
} 

const estilos = StyleSheet.create({
    pagina1 : {
        width,
        height,
        backgroundColor: '#BF2222'
    },
    pagina2 : {
        width,
        height,
        backgroundColor: '#2B95FF'
    },
    pagina3 : {
        width,
        height,
        backgroundColor: '#DAF722'
    }
})