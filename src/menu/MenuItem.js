import React, { Component, PropTypes } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    Modal,
    TouchableOpacity
} from 'react-native';

const {width} = Dimensions.get('window');

export default class MenuItem extends Component {
    selecionarItem(item, i) {
        let itemSelecionado = { index: i, item };
        this.props.itemSelecionado(itemSelecionado);
    }

    renderItems() {
        return this.props.itens.map((item, i)=>{
            return(
                <TouchableOpacity 
                    key={i} 
                    style={estilos.item} 
                    onPress={()=>this.selecionarItem(item, i)}
                >
                    <Text>{item.nome}</Text>
                </TouchableOpacity>
            )
        })
    }

    render() {
        return(
            <Modal
                animationType="slide"
                transparent={true}
                visible={this.props.visivel}
                onRequestClose={this.props.fechar}
            >   
                <View style={estilos.menu}>
                    {this.renderItems()}
                </View>
            </Modal>
        )
    }
}

MenuItem.PropTypes = {
    abrir: PropTypes.bool,
    fechar: PropTypes.func,
    itens: PropTypes.array,
    itemSelecionado: PropTypes.func
}

const estilos = StyleSheet.create({
    menu : {
        width,
        paddingVertical: 5,
        position: 'absolute',
        bottom: 0,
        elevation: 5,
        backgroundColor: '#FFFFFF'
    },
    item : {
        paddingVertical: 10,
        justifyContent: 'center',
        alignItems: 'center'
    }
})