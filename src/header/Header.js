import React, { Component, PropTypes } from 'react';
import {
    View,
    Text,
    ScrollView,
    Animated,
    Dimensions,
    StyleSheet
} from 'react-native';

const {width} = Dimensions.get('window');
const AnimatedScrollView = Animated.createAnimatedComponent(ScrollView);
const HEADER_HEIGHT = 60;

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            scrollAnim: new Animated.Value(0),
            offsetAnim: new Animated.Value(0)
        }
    }

    componentDidMount() {
        this.state.scrollAnim.addListener(this._handleScroll);
    }

    componentWillUnmount() {
        this.state.scrollAnim.removeListener(this._handleScroll);
    }

    _handleScroll = ({ value }) => {
        this._previousScrollvalue = this._currentScrollValue;
        this._currentScrollValue = value;
    }

    _handleScrollEndDrag = () => this._scrollEndTimer = setTimeout(this._handleMomentumScrollEnd, 250);

    _handleMomentumScrollBegin = () => clearTimeout(this._scrollEndTimer);
    
    _handleMomentumScrollEnd = () => {
        const previous = this._previousScrollvalue;
        const current = this._currentScrollValue;

        if (previous > current || current < HEADER_HEIGHT) {
            Animated.spring(this.state.offsetAnim, {
                toValue: -current,
                tension: 300,
                friction: 35
            }).start();
        } else {
            Animated.timing(this.state.offsetAnim, {
                toValue: 0,
                duration: 500
            }).start();
        }
    }

    render() {
        const {scrollAnim, offsetAnim} = this.state;
        const translateY = Animated.add(scrollAnim, offsetAnim).interpolate({
            inputRange: [0, HEADER_HEIGHT],
            outputRange: [0, -HEADER_HEIGHT],
            extrapolate: 'clamp'
        });

        return(
            <View>
                <AnimatedScrollView
                    contentContainerStyle={estilos.corpo}
                    scrollEventThrottle={16}
                    onScroll={Animated.event([ {nativeEvent: {contentOffset: {y: this.state.scrollAnim}}} ])}
                    onMomentumScrollBegin={this._handleMomentumScrollBegin}
                    onMomentumScrollEnd={this._handleMomentumScrollEnd}
                    onScrollEndDrag={this._handleScrollEndDrag}>
                        {this.props.children}
                </AnimatedScrollView>
                <Animated.View style={[estilos.header, { transform: [{translateY}] }]}>
                    <Text style={estilos.titulo}>{this.props.titulo}</Text>
                </Animated.View>
            </View>
        )
    }
}

Header.PropTypes = {
    titulo: PropTypes.string
}

const estilos = StyleSheet.create({
    corpo : {
        paddingTop: HEADER_HEIGHT,
        width
    },
    header: {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        height: HEADER_HEIGHT,
        top: 0,
        left: 0,
        right: 0,
        elevation: 3,
        backgroundColor: '#414649',
    },
    titulo : {
        maxWidth: 250,
        fontSize: 20,
        color: '#FFFFFF'
    }
})