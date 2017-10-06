import React, { Component } from 'react';
import {
  View,  
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import { Menu } from 'react-native-componentes';

const ITENS = [
    {nome: 'Criar'},
    {nome: 'Atualizar'},
    {nome: 'Deletar'},
]

export default class ExemploMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            abrirMenu: false
        }
    }

    _itemSelecionado(item) {
        console.log(item)
        this.setState({ abrirMenu: false })
    }

    render() {
        return(
            <View style={estilos.corpo}>
                <Menu 
                    visivel={this.state.abrirMenu} 
                    fechar={()=>this.setState({ abrirMenu: false })}
                    itens={ITENS}
                    itemSelecionado={(item)=>this._itemSelecionado(item)} 
                />   
                    <TouchableOpacity onPress={()=>this.setState({ abrirMenu: true })}>
                        <Text style={estilos.titulo}>
                            Abrir o Menu
                        </Text>  
                    </TouchableOpacity>
            </View>
        )
    }
}

const estilos = StyleSheet.create({
    corpo : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    titulo : {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    }
})
