import React, { Component, PropTypes } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Dimensions
} from 'react-native';
const { width, height } = Dimensions.get('window');

export default class Carousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            paginaAtual: this.props.paginaInicial
        }
    }

    renderNavegacao() {
        if (!this.props.navegacao || !this.props.children) return null;
        return(
            <View style={estilos.navegacao}>
                <Text style={estilos.texto}>
                    {`${this.state.paginaAtual + 1}/${this.props.children.length}`}
                </Text>
            </View> 
        )
    }

    renderItens() {
        if (!this.props.children) return null;
        return this.props.children.map((item, i)=> {
            return(
                <View key={i}>{item}</View>
            )
        })
    }

    onScrollEnd = (event)=> {
        // Divide o deslocamento horizontal pela largura da view para obter a página atual
        let {contentOffset, layoutMeasurement} = event.nativeEvent;
        this.setState({
            paginaAtual: Math.floor(contentOffset.x / layoutMeasurement.width)
        }, console.log(this.state.paginaAtual))
    }

    render() {
        return(
            <View style={estilos.corpo}>
                <ScrollView
                    horizontal
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}  
                    onMomentumScrollEnd={this.onScrollEnd}
                >
                    {this.renderItens()}
                </ScrollView> 
                    {this.renderNavegacao()}
            </View>  
        )
    }
}

Carousel.PropTypes = {
    navegacao: PropTypes.bool
}

Carousel.defaultProps = {
    navegacao: true
}

const estilos = StyleSheet.create({
    corpo : {
        flex: 1,
    },
    pagina : {
        width,
        height
    },
    nenhumItem : {
        textAlign: 'center',
        alignSelf: 'center'
    },

    //Navegação
    navegacao : {
        position: 'absolute',
        bottom: 20,
        alignSelf: 'center',
        zIndex: 99
    },
    texto : {
        fontSize: 25,
        color: '#000000'
    },

    //Rodapé
    rodape : {
        position: 'absolute',
        bottom: 0,
        width,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    }

})     