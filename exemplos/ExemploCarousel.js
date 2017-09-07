import React, { Component } from 'react';
import {
    View,
    StyleSheet,
} from 'react-native';
import Carousel from 'react-native-componentes';

export default class ExemploCarousel extends Component {
    render() {
        return(
            <View style={estilos.corpo}>
                <Carousel> 
                    <View style={estilos.pagina1} />
                    <View style={estilos.pagina2} />
                    <View style={estilos.pagina3} />
                </Carousel>
            </View>
        )
    }
} 

const estilos = StyleSheet.create({
    corpo : {
        flex: 1
    },
    pagina1 : {
        flex: 1,
        backgroundColor: '#BF2222'
    },
    pagina2 : {
        flex: 1,
        backgroundColor: '#2B95FF'
    },
    pagina3 : {
        flex: 1,
        backgroundColor: '#DAF722'
    }
})