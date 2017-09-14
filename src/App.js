import React, { Component } from 'react';
import {
  View,  
  Text,
  StyleSheet
} from 'react-native';
import GaleriaFotos from './galeriaFotos/GaleriaFotos';
const FOTOS = [
    {id: 0, nome: 'Foto Um', url: 'https://i.imgur.com/mcT43dV.jpg'},
    {id: 1, nome: 'Foto Um', url: 'https://i.imgur.com/mcT43dV.jpg'},
    {id: 2, nome: 'Foto Um', url: 'https://i.imgur.com/mcT43dV.jpg'},
    {id: 3, nome: 'Foto Um', url: 'https://i.imgur.com/mcT43dV.jpg'},
    {id: 4, nome: 'Foto Um', url: 'https://i.imgur.com/mcT43dV.jpg'},
    {id: 5, nome: 'Foto Um', url: 'https://i.imgur.com/mcT43dV.jpg'},
    {id: 6, nome: 'Foto Um', url: 'https://i.imgur.com/mcT43dV.jpg'},
    {id: 7, nome: 'Foto Um', url: 'https://i.imgur.com/mcT43dV.jpg'},
    {id: 8, nome: 'Foto Um', url: 'https://i.imgur.com/mcT43dV.jpg'},
    {id: 9, nome: 'Foto Um', url: 'https://i.imgur.com/mcT43dV.jpg'},
    {id: 10, nome: 'Foto Um', url: 'https://i.imgur.com/mcT43dV.jpg'},
    {id: 11, nome: 'Foto Um', url: 'https://i.imgur.com/mcT43dV.jpg'},
    {id: 12, nome: 'Foto Um', url: 'https://i.imgur.com/mcT43dV.jpg'},
    {id: 13, nome: 'Foto Um', url: 'https://i.imgur.com/mcT43dV.jpg'},
    {id: 14, nome: 'Foto Um', url: 'https://i.imgur.com/mcT43dV.jpg'},
    {id: 15, nome: 'Foto Um', url: 'https://i.imgur.com/mcT43dV.jpg'},
    {id: 16, nome: 'Foto Um', url: 'https://i.imgur.com/mcT43dV.jpg'},
    {id: 17, nome: 'Foto Um', url: 'https://i.imgur.com/mcT43dV.jpg'},
    {id: 18, nome: 'Foto Um', url: 'https://i.imgur.com/mcT43dV.jpg'},
    {id: 19, nome: 'Foto Um', url: 'https://i.imgur.com/mcT43dV.jpg'},
];

export default class App extends Component {
    render() {
        return(
            <View >
                <GaleriaFotos 
                    titulo="Album de Terror"
                    qtdFotos={10}
                    fotos={FOTOS}
                />      
            </View>
        )
    }
}

const estilos = StyleSheet.create({
    
})
