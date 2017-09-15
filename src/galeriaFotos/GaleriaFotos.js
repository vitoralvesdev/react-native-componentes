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

    _ListHeaderComponent() {
        return(
            <View style={estilos.header}>
                <Text style={estilos.headerTexto}>{this.props.titulo}</Text>
                <Text style={estilos.headerTexto}>{this.props.qtdFotos}</Text>
            </View>
        )
    }

    render() {
        return(
                <FlatList 
                    data={this.props.fotos}
                    keyExtractor={item=>item.id}
                    numColumns={3}
                    ListHeaderComponent={this._ListHeaderComponent()}
                    renderItem={({item})=>(
                        <View>
                            <Image style={estilos.foto} source={{uri: item.url}} />
                        </View>
                    )}
                />
          
        )
    }
}
    
GaleriaFotos.PropTypes = {
    titulo: PropTypes.string,
    qtdFotos: PropTypes.string,
    fotos: PropTypes.object
}

const estilos = StyleSheet.create({
    header : {
        width: width,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerTexto : {
        color: '#000000',
        fontSize: 20
    },
    foto : {
        width: width/3,
        height: 100,
        marginRight: 2,
        marginBottom: 2,
        backgroundColor: '#E2E2E2'
    }
    
})