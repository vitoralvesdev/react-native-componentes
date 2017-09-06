import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import App from './src/App';

export default class reactNativeComponentes extends Component {
    render() {
        return(
            <App />
        )
    }
}

AppRegistry.registerComponent('reactNativeComponentes', () => reactNativeComponentes);
