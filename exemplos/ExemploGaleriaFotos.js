import React, { Component } from 'react';
import {
  View,  
  Text
} from 'react-native';
import { GaleriaFotos } from 'react-native-componentes';

const FOTOS = [
    {id: 0, nome: 'Pennywise', url: 'https://i.imgur.com/mcT43dV.jpg'},
    {id: 1, nome: 'Pennywise', url: 'https://i.imgur.com/mcT43dV.jpg'},
    {id: 2, nome: 'Pennywise', url: 'https://i.imgur.com/mcT43dV.jpg'},
    {id: 3, nome: 'Pennywise', url: 'https://i.imgur.com/mcT43dV.jpg'},
    {id: 4, nome: 'Pennywise', url: 'https://i.imgur.com/mcT43dV.jpg'},
    {id: 5, nome: 'Pennywise', url: 'https://i.imgur.com/mcT43dV.jpg'},
    {id: 6, nome: 'Pennywise', url: 'https://i.imgur.com/mcT43dV.jpg'},
    {id: 7, nome: 'Pennywise', url: 'https://i.imgur.com/mcT43dV.jpg'},
    {id: 8, nome: 'Pennywise', url: 'https://i.imgur.com/mcT43dV.jpg'},
    {id: 9, nome: 'Pennywise', url: 'https://i.imgur.com/mcT43dV.jpg'},
    {id: 10, nome: 'Pennywise', url: 'https://i.imgur.com/mcT43dV.jpg'},
    {id: 11, nome: 'Pennywise', url: 'https://i.imgur.com/mcT43dV.jpg'},
    {id: 12, nome: 'Pennywise', url: 'https://i.imgur.com/mcT43dV.jpg'},
    {id: 13, nome: 'Pennywise', url: 'https://i.imgur.com/mcT43dV.jpg'},
    {id: 14, nome: 'Pennywise', url: 'https://i.imgur.com/mcT43dV.jpg'},
    {id: 15, nome: 'Pennywise', url: 'https://i.imgur.com/mcT43dV.jpg'},
    {id: 16, nome: 'Pennywise', url: 'https://i.imgur.com/mcT43dV.jpg'},
    {id: 17, nome: 'Pennywise', url: 'https://i.imgur.com/mcT43dV.jpg'},
    {id: 18, nome: 'Pennywise', url: 'https://i.imgur.com/mcT43dV.jpg'},
    {id: 19, nome: 'Pennywise', url: 'https://i.imgur.com/mcT43dV.jpg'},
];

export default class ExemploGaleriaFotos extends Component {
    render() {
        return(
            <View>
                <GaleriaFotos 
                    titulo="Album de Terror"
                    qtdFotos="20 Fotos"
                    fotos={FOTOS}
                /> 
            </View>
        )
    }
}
