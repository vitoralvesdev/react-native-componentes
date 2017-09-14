import React, { Component, PropTypes } from 'react';
import {
    View, 
    Text,
    StyleSheet,
    Dimensions,
    Image,
    FlatList
} from 'react-native';
const {width} = Dimensions.get('window');

export default class GaleriaFotos extends Component {
    constructor(props) {
        super(props);
    }

    renderQtdFotos(qtdFotos) {
        if (qtdFotos < 0 || qtdFotos == 0) return 'Nenhum Foto';
        if (qtdFotos == 1) return qtdFotos + ' Foto';
        if (qtdFotos > 1) return qtdFotos + ' Fotos';
    }

    renderHeader() {
        return(
            <View style={estilos.header}>
                <Text style={estilos.headerTexto}>{this.props.titulo}</Text>
                <Text style={estilos.headerTexto}>{this.renderQtdFotos(this.props.qtdFotos)}</Text>
            </View>
        )
    }

    render() {
        return(
            <View>
                {this.renderHeader()}
                <View style={estilos.fotos}>
                    <FlatList 
                        data={this.props.fotos}
                        keyExtractor={item=>item.id}
                        numColumns={3}
                        renderItem={({item})=>(
                            <View>
                                <Image style={estilos.foto} source={{uri: item.url}} />
                            </View>
                        )}
                    />
                </View>
            </View>
        )
    }
}
    
GaleriaFotos.PropTypes = {
    titulo: PropTypes.string,
    qtdFotos: PropTypes.number,
    fotos: PropTypes.object
}

const estilos = StyleSheet.create({
    header : {
        width: width,
        height: 60,
        position: 'absolute',
        top: 0,
        backgroundColor: 'red'
    },
    headerTexto : {
        color: '#000000',
        fontSize: 20,
        marginLeft: 20
    },
    fotos : {
        marginTop: 65
    },
    foto : {
        width: width/3,
        height: 100,
        margin: 5,
        backgroundColor: '#E2E2E2'
    }
    
})