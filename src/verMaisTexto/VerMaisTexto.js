import React, { Component, PropTypes } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    TouchableOpacity
} from 'react-native';
const {width} = Dimensions.get('window');

export default class VerMaisTexto extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numeroLinhas: this.props.numeroLinhas,
            verMais: true
        }
    }

    talvezMostrarVerMais() {
        if (!this.props.numeroLinhas || this.props.numeroLinhas == 0) return false;
        return(
            <TouchableOpacity onPress={this.alterarValorVerMais}>
                <Text style={estilos.verMais}>{this.state.verMais ? 'Ver Mais' : 'Ver Menos'}</Text>
            </TouchableOpacity>
        )
    }

    alterarValorVerMais = ()=> {
        this.setState({ 
            numeroLinhas: !this.state.verMais ? this.props.numeroLinhas : 0,
            verMais: !this.state.verMais 
        })
    }

    render() {
        console.log("render")
        return(
            <View style={estilos.corpo}>
                <Text numberOfLines={this.state.numeroLinhas}>{this.props.children}</Text>
                <View>
                    {this.talvezMostrarVerMais()}
                </View>
            </View>
        )
    }
}

VerMaisTexto.PropTypes = {
    numeroLinhas: PropTypes.number
}

const estilos = StyleSheet.create({
    corpo : {
        width: width-40
    },
    verMais : {
        color: '#2691EF',
        fontSize: 15
    }
})