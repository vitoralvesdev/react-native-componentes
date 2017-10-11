import React, { Component, PropTypes } from 'react';
import {
    View, 
    Text,
    StyleSheet,
    Dimensions,
    Image,
    TouchableOpacity,
    Modal,
    FlatList
} from 'react-native';

const {width, height} = Dimensions.get('window');

export default class GaleriaFotos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            abrirFoto: false,
            urlFoto: ''
        };
    }

    _ListHeaderComponent() {
        return(
            <View style={estilos.header}>
                <Text style={estilos.headerTexto}>{this.props.titulo}</Text>
                <Text style={estilos.headerTexto}>{this.props.qtdFotos}</Text>
            </View>
        )
    }

    _renderItem = ({ item })=> {
        return(
            <TouchableOpacity onPress={()=> this.setState({ abrirFoto: true, urlFoto: item.url })} activeOpacity={0.8}>
                <Image style={estilos.fotoMin} source={{uri: item.url}} />
            </TouchableOpacity>
        )
    }

    renderFoto(urlFoto) {
        return(
            <Modal 
                animationType="slide"
                visible={this.state.abrirFoto}
                onRequestClose={()=> this.setState({ abrirFoto: false, urlFoto: '' })}>
                    <View style={estilos.container}>
                        <View style={estilos.headerFoto}>
                            <TouchableOpacity onPress={()=> this.setState({ abrirFoto: false, urlFoto: '' })} activeOpacity={0.8}>
                                <Text style={estilos.fechar}> Fechar </Text>
                            </TouchableOpacity>
                        </View>

                        <View style={estilos.containerFoto}>
                            <Image style={estilos.foto} source={{uri: urlFoto}} resizeMode="contain"/>
                        </View>
                    </View>
            </Modal>
        )
    }

    render() {
        return(
            <View>
                <FlatList 
                    data={this.props.fotos}
                    keyExtractor={item=>item.id}
                    numColumns={3}
                    ListHeaderComponent={this._ListHeaderComponent()}
                    renderItem={({item})=>this._renderItem({item})}
                />

                {this.renderFoto(this.state.urlFoto)}
            </View>
        )
    }
}
    
GaleriaFotos.PropTypes = {
    titulo: PropTypes.string,
    qtdFotos: PropTypes.string,
    fotos: PropTypes.object,
    header: PropTypes.string
};


const estilos = StyleSheet.create({
    header : {
        width,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerTexto : {
        color: '#000000',
        fontSize: 20
    },
    fotoMin : {
        width: width/3,
        height: 100,
        marginRight: 2,
        marginBottom: 2,
        backgroundColor: '#E2E2E2'
    },

    // Foto 
    container : {
        width,
        height,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black'
    },
    containerFoto : {
        flex: 1
    },
    headerFoto : {
        width,
        height: 60,
        position: 'absolute',
        top: 0,
        zIndex: 99,
        justifyContent: 'center',
        alignItems: 'flex-end',
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
    },
    fechar : {
        fontSize: 18,
        color: 'white',
        paddingRight: 20
    },
    foto : {
        width,
        height: height-60
    }

});