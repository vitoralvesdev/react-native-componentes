import React, { Component } from 'react';
import {
  View,  
  Text,
  Dimensions,
  StyleSheet
} from 'react-native';
import Header from './header/Header';

const { width, height } = Dimensions.get('window');

export default class App extends Component {
    render() {
        return(  
            <Header titulo="React Native Componentes">
                <View style={styles.corpo}>
                    <Text style={styles.subTitulo}>
                        ./src/ * Para todos os componentes
                    </Text>
                    <Text style={styles.subTitulo}>
                        ./exemplos/ * Para todos os exemplos
                    </Text>     
                </View>
            </Header>     
        )
    }
}

const styles = StyleSheet.create({
    corpo : {
        justifyContent: 'center',
        alignItems: 'center',
        width,
        height: height-60,
    },
    subTitulo : {
        textAlign: 'center',
        color: '#333333',
        fontSize: 18
    }
})