import React, { Component, PropTypes } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    FlatList,
    TouchableOpacity
} from 'react-native';

const {width} = Dimensions.get('window');

export default class ListaItem extends Component { 

    _renderItem({item}) {
        return(
            <View style={estilos.container}>
                <Text style={estilos.item}>dsd</Text>
            </View>
        )
    }

    render() {
        return(
            <FlatList 
                data={this.props.itens}
                keyExtractor={(item, index) => item.id}
                renderItem={this._renderItem}
                List
            />
        )
    }
}

ListaItem.PropTypes = {
    itens: PropTypes.array
}

const estilos = StyleSheet.create({
    container : {
        width,
        borderColor: 'red',
        borderWidth: 1 
    },
    item : {
        paddingVertical: 20,
        paddingHorizontal: 20,
        fontSize: 20 
    }
})