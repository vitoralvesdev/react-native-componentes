import React, { Component, PropTypes } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions
} from 'react-native';
const {width} = Dimensions.get('window');

export default class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <View style={estilos.corpo}>
                <Text numberOfLines={1} style={estilos.titulo}>{this.props.titulo}</Text>
            </View>
        )
    }
}

Header.PropTypes = {
    titulo: PropTypes.string
}

const estilos = StyleSheet.create({
    corpo : {
        position: 'absolute',
        top: 0,
        width,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#414649',
        elevation: 3,
        zIndex: 99
    },
    titulo : {
        maxWidth: 250,
        fontSize: 20,
        color: '#FFFFFF'
    }
})