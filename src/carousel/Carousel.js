import React, { Component } from 'react';
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
    }

    renderItems() {
        if (!this.props.children) return;
        return this.props.children.map((item, i)=> {
            return(
                <View key={i} style={estilos.pagina}>{item}</View>
            )
        })
    }

    render() {
        return(
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                pagingEnabled={true}>
                    {this.renderItems()}
            </ScrollView>
        )
    }
}

const estilos = StyleSheet.create({
    pagina : {
        flex: 1,
        width
    }
})     