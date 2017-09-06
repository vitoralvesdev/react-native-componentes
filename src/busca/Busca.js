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
    }

    render() {
        return(
            <View style={estilos.corpo}>
                <TextInput 
                    style={estilos.busca}
                    onChangeText={this.props.busca}
                /> 
                <TouchableOpacity onPress={Keyboard.dismiss}>
                    <Text>OK</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

Busca.PropTypes = {
    busca: PropTypes.func
}

const estilos = StyleSheet.create({
    corpo : {
        flexDirection: 'row'
    },
    busca : {
        width: width-60
    }
})