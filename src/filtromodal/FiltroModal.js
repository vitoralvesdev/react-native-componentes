import React, { Component, PropTypes } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Modal, 
    Dimensions,
    ScrollView,
    TouchableOpacity
} from 'react-native';
const {width,height} = Dimensions.get('window');

export default class FiltroModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filtroSelecionado: { id: 0, filtro: '' }
        }
    }

    selecionarFiltro() {
        this.props.filtroSelecionado(this.state.filtroSelecionado);
    }

    renderTitulo() {
        return(
            <View style={estilos.titulo}><Text>{this.props.titulo}</Text></View>
        )
    }

    renderItems() {
        const {filtroSelecionado} = this.state;
        return this.props.filtros.map((item, i)=>{
            return(
                <View key={i} style={estilos.itens}>
                    <TouchableOpacity onPress={()=>this.setState({filtroSelecionado: item})}>
                        <Text 
                            key={i} 
                            style={filtroSelecionado.id == item.id 
                                   ? estilos.itemSelecionado 
                                   : estilos.item}>
                                {item.filtro}
                        </Text>
                    </TouchableOpacity>
                </View>
            )    
        })
    }

    renderBotoes() {
        return(
            <View style={estilos.botoes}>
                <TouchableOpacity style={estilos.botao} onPress={this.props.fechar}>
                    <Text>Cancelar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={estilos.botao} onPress={()=>this.selecionarFiltro()}>
                    <Text>Selecionar</Text>
                </TouchableOpacity>
            </View>
        )
    }

    render() {
        return(
            <Modal
                animationType="slide"
                transparent={true}
                visible={this.props.abrir}
                onRequestClose={this.props.fechar}>
                    <View style={estilos.modal}>
                        {this.renderTitulo()}
                        <ScrollView>
                            {this.renderItems()}
                        </ScrollView>
                        {this.renderBotoes()}
                    </View>
            </Modal>
        )
    }
}

FiltroModal.PropTypes = {
    abrir: PropTypes.bool,
    fechar: PropTypes.func,
    titulo: PropTypes.string,
    filtros: PropTypes.array,
    filtroSelecionado: PropTypes.func
}

const estilos = StyleSheet.create({
    modal : {
        width: width-50,
        height: 300,
        top: height/4,
        borderRadius: 5,
        elevation: 5,
        alignSelf: 'center',
        backgroundColor: '#FFFFFF'
    },
    titulo : {
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
    },
    itens : {
        alignItems: 'center'
    },
    item : {
        fontSize: 16,
        padding: 10
    },
    itemSelecionado : {
        fontSize: 16,
        fontWeight: 'bold',
        padding: 10
    },
    botoes : {
        flexDirection: 'row',
    },
    botao : {
        flex: 1,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
    }
})