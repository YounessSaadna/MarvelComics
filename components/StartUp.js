import React from 'react';
import { Actions } from 'react-native-router-flux';



import { Animated, View, StyleSheet, ScrollView, Text, Image, SafeAreaView } from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';

class StartUp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            LogoAnime: new Animated.Value(0),
        }
    }

    componentDidMount() {
        const { LogoAnime } = this.state;

        Animated.parallel([
            Animated.spring(LogoAnime, {
                toValue: 1,
                tension: 10,
                friction: 2,
                duration: 1000,
                useNativeDriver: false,
            }).start(),
            Animated.timing(LogoAnime, {
                toValue: 1,
                duration: 1200,
                useNativeDriver: false,
            })
        ]).start(() => {
            this.setState({
                loading: true,
            });
        });

        setTimeout(() => {
            Actions.AppInfo();
        }, 2000)


    }


    render() {

        return (

            <View style={styles.rectangle}>
                <Animated.View style={{
                    opacity: this.state.LogoAnime,
                    top: this.state.LogoAnime.interpolate({
                        inputRange: [0, 1],
                        outputRange: [80, 0]
                    })
                }}>
                    <Image style={styles.image} source={require('../assets/images/logo1.png')} />
                </Animated.View>
            </View>


        );

    }
}


const styles = StyleSheet.create({
    rectangle: {
        justifyContent: 'center',
        height: '100%',
        width: '100%',
        backgroundColor: '#FFFFFF',
    },
    image: {
        marginTop: '30%',
        marginLeft: '5%',
        alignSelf: 'center',
        height: '50%',
        resizeMode: 'contain',
    },

});

export default StartUp;

