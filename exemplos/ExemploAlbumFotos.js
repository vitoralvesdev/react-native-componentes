import React, { Component } from 'react';
import {
    ScrollView,  
    Text
} from 'react-native';
import { AlbumFotos } from 'react-native-componentes';

export default class AlbumFotos extends Component {
    render() {
        return(
            <ScrollView>
                <AlbumFotos 
                    capa="https://i.imgur.com/mcT43dV.jpg"
                    titulo="Fotos de Terror"
                    qtdFotos="10 Fotos"
                /> 
            ]</ScrollView>
        )
    }
}
