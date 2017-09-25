import React, { Component } from 'react';
import {
  View,  
  Text,
  StyleSheet
} from 'react-native';
import { VerMaisTexto } from 'react-native-componentes';

export default class ExemploVerMaisTexto extends Component {
    render() {
        return(
            <View style={estilos.corpo}>         
                <VerMaisTexto numeroLinhas={3}>   
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Aenean purus turpis, maximus vitae lacus a, interdum finibus mauris. 
                    Donec mollis orci augue, in pulvinar libero dictum sed. 
                    Mauris in ipsum dolor. 
                    Maecenas eget enim eget eros sollicitudin sodales. 
                    Ut eu luctus est, eget condimentum felis. 
                    Aliquam in rhoncus risus, a imperdiet eros. 
                    Fusce in dapibus odio. 
                    Sed mollis enim vitae suscipit tristique. 
                    Nunc feugiat nisi ante, consectetur vestibulum sapien faucibus id.
                </VerMaisTexto>      
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
    }
})