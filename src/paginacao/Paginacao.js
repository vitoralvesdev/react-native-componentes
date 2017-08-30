import React, { Component, PropTypes } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    TouchableOpacity
} from 'react-native';
const {width} = Dimensions.get('window');

export default class Paginacao extends Component {
    constructor(props) {
        super(props);
        this.state = {
            botaoAnterior: true,
            botaoProximo: true
        }
        this.paginaInicial = this.props.paginaInicial;
    }

    componentWillMount() {
        this.verificarBotoes();
    }

    paginar(pagina) {
        const {paginas, paginaAtual} = this.props;

        this.paginaInicial = this.paginaInicial + pagina;
        this.verificarBotoes();
        return paginaAtual(paginas[this.paginaInicial]);
    }

    verificarBotoes() {
        const {paginas} = this.props; 
    
        // Desativa se for a página inicial
        if(!this.paginaInicial > 0) {
            this.setState({ botaoAnterior: false });   
        } else {
            this.setState({ botaoAnterior: true });
        }
        
        // Desativa se for a página final
        if(paginas[paginas.length - 1] == paginas[this.paginaInicial]) {
            this.setState({ botaoProximo: false });
        } else {
            this.setState({ botaoProximo: true });
        }
    }

    renderBotaoAnterior() {
        return(
            <TouchableOpacity onPress={()=>this.paginar(-1)}>
                <Text>Anterior</Text>    
            </TouchableOpacity>
        )
    }

    renderBotaoProximo() {
        return(
            <TouchableOpacity onPress={()=>this.paginar(1)}>
                <Text> Próximo </Text>
            </TouchableOpacity>
        )
    }

    render() {
        const {botaoAnterior, botaoProximo} = this.state;
        return(
            <View style={estilos.corpo}>
                <View style={estilos.botoes}>
                    <View style={estilos.botoesCorpo}>
                        <View style={estilos.botaoAnterior}>
                            {botaoAnterior ? this.renderBotaoAnterior() : null}  
                        </View>
                    </View>

                    <View style={estilos.botoesCorpo}>
                        <View style={estilos.botaoProximo}>
                            {botaoProximo ? this.renderBotaoProximo() : null}
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

Paginacao.PropTypes = {
    paginaInicial: PropTypes.number,
    paginas: PropTypes.array,
    paginaAtual: PropTypes.func
}

const estilos = StyleSheet.create({
    corpo : {
        justifyContent: 'center',
        alignItems: 'center'
    },
    botoes : {
        width: width-60,
        flexDirection: 'row',
        alignItems: 'center'
    },
    botoesCorpo : {
        flex: 1
    },
    botaoAnterior : {
        flexDirection: 'row',
        justifyContent : 'flex-start'
    },
    botaoProximo : {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    }
})