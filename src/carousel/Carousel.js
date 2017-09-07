import React, { Component, PropTypes } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Dimensions
} from 'react-native';
const {width} = Dimensions.get('window');

export default class Carousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            paginaAtual: 1
        }
        this.itens = this.props.children;
    }

    renderNavegacao() {
        if (!this.props.navegacao) return;
            return(
                <Text style={estilos.navegacao}>
                    {`${this.state.paginaAtual}/${this.itens.length}`}
                </Text> 
            )
    }

    renderItens() {
        if (!this.props.children) return;
        return this.itens.map((item, i)=> {
            return(
                <View key={i} style={estilos.pagina}>{item}</View>
            )
        })
    }

    onScrollEnd = (event)=> {
        // Divide o deslocamento horizontal pela largura da view para obter a página atual
        let {contentOffset, layoutMeasurement} = event.nativeEvent;
        this.setState({
            paginaAtual: Math.floor(contentOffset.x / layoutMeasurement.width) + 1    
        })
    }

    render() {
        return(
            <View>
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled={true}
                    onMomentumScrollEnd={this.onScrollEnd}>
                        {this.renderItens()}
                </ScrollView>
                <View style={estilos.rodape}>
                    {this.renderNavegacao()}
                </View>
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
    pagina : {
        flex: 1,
        width
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
    },
    navegacao : {
        fontSize: 20,
        color: '#FFFFFF'
    }
})     