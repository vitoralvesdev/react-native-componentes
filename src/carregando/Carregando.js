import React, { Component, PropTypes } from 'react';
import {
    View,
    Text,
    ActivityIndicator,
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
        switch(this.props.layout) {
            case "ponteiro" : 
                return(
                    <View style={estilos.corpo}>
                        <Text style={estilos.carregando}>Carregando...</Text>
                    </View>
                )
            case "normal" :
                return(
                    <View style={estilos.corpo}>
                        <ActivityIndicator />
                        <Text style={estilos.carregando}>Carregando</Text>
                    </View>
                )
        }
    }
}

Carregando.defaultProps= {
    layout: "normal",
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