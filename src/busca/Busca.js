import React, { Component, PropTypes } from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
    Keyboard
} from 'react-native';
const {width} = Dimensions.get('window');

export default class Busca extends Component {
    constructor(props) {
        super(props);
        this.state = {
            busca : ''
        }
    }

    filtroData(data, busca) {
        data.forEach(data=> {
            if(data.nome.toLowerCase() == busca) {
                this.props.filtroSelecionado(data);
            }
        });
    }

    _onChangeText = (busca)=> { 
        let _busca = busca.toLowerCase();
        this.setState({ busca: _busca }, this.props.busca(_busca), this.filtroData(this.props.filtro, _busca));
    }

    render() {
        return(
            <View style={estilos.corpo}>
                <TextInput 
                    style={estilos.busca}
                    onChangeText={busca=>this._onChangeText(busca)}
                /> 
                <TouchableOpacity onPress={Keyboard.dismiss}>
                    <Text>OK</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

Busca.PropTypes = {
    busca: PropTypes.func,
    filtroSelecionado: PropTypes.func
}

const estilos = StyleSheet.create({
    corpo : {
        flexDirection: 'row'
    },
    busca : {
        width: width-60
    }
})