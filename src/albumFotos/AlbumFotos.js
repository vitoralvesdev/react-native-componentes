import React, { Component, PropTypes } from 'react';
import {
    View, 
    Text,
    StyleSheet,
    Dimensions,
    Image,
    TouchableOpacity
} from 'react-native';
const {width} = Dimensions.get('window');

export default class AlbumFotos extends Component {
    constructor(props) {
        super(props);
    }

    renderAlbumCapa() {
        if (this.props.capa) {
            return(
                <Image style={estilos.albumCapa} source={{uri: this.props.capa}} />
            )
        }  
    }

    render() {
        return(
            <TouchableOpacity activeOpacity={0.7} onPres={this.props.abrir}>
                <View style={estilos.album}>
                    {this.renderAlbumCapa()}
                    <View style={estilos.albumInfo}>
                        <Text style={estilos.albumInfoTexto}>{this.props.titulo}</Text>
                        <Text style={estilos.albumInfoTexto}>{this.props.qtdFotos}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}

AlbumFotos.PropTypes = {
    abrir: PropTypes.func,
    capa: PropTypes.string,
    titulo: PropTypes.string,
    qtdFotos: PropTypes.string
}

const estilos = StyleSheet.create({
    album : {
        width,
        height: 220,
        marginBottom: 10,
        backgroundColor: '#BEBEBE',
        elevation: 3
    },
    albumCapa : {
        width,
        height: 220,
    },
    albumInfo : {
        width: width-40,
        height: 70,
        position: 'absolute',
        bottom: 0,
        alignSelf: 'center',
    },
    albumInfoTexto : {
        color: '#FFFFFF',
        fontSize: 20
    }
})