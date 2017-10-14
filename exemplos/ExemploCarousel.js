import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Dimensions
} from 'react-native';
import { Carousel } from 'react-native-componentes';

const { width, height } = Dimensions.get('window');

export default class ExemploCarousel extends Component {
    render() { 
        return(
            <Carousel
                paginaAtual={index=>console.log("PÁGINA_ATUAL=>", index)}
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