import React, { Component, PropTypes } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView
} from 'react-native';

export default class Carousel extends Component {
   /* render() {
        return(
            <View style={[estilos.pagina, this.props.estiloPagina ]}>
                <ScrollView
                    horizontal={false}
                    showsHorizontalScrollIndicator={false}
                >
                    {this.props.children}
                </ScrollView>
            </View>
        )
    }*/

    render() {
        return(
            <View><Text>dsdsd</Text></View>
        )
    }
}

Carousel.PropTypes = {
    estiloPagina: PropTypes.style
}

const estilos = StyleSheet.create({
    pagina : {
        flex: 1
    }
});     