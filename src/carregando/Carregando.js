import React, { Component, PropTypes } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

export default class Carregando extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tempo: 0
        }
    }

    componentWillMount() {
        if (this.props.tempo) this.contador("iniciar");
    }

    componentWillUnMount() {
        this.contador("parar");
    }

    contador(contador) {
        setInterval(()=> {
            this.setState({
                tempo: contador === "iniciar" ? this.state.tempo + 1 : 0
            }, this.props.tempo(this.state.tempo))
        }, 1000);
    }

    render() {
        return(
            <View style={estilos.corpo}>
                <Text style={estilos.carregando}>Carregando...</Text>
            </View>
        )
    }
}

Carregando.defaultProps= {
    tempo: false
}

const estilos = StyleSheet.create({
    corpo : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }, 
    carregando : {
        color: '#000000',
        fontSize: 20
    }
})