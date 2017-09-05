import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';
import Carousel from 'react-native-componentes';

export default class Carousel extends Component {
    render() {
        return(
            <View style={estilos.corpo}>
                <Carousel> 
                    <View style={estilos.pagina1}><Text>Página 1</Text></View>
                    <View style={estilos.pagina2}><Text>Página 2</Text></View>
                    <View style={estilos.pagina3}><Text>Página 3</Text></View>
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