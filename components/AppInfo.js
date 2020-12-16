import React from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';
import { Actions } from 'react-native-router-flux';


class AppInfo extends React.Component {

    GoToHerosList() {
        Actions.HerosList();
    }

    render() {
        return (

            <>
            
                <View style={styles.body}>
                    <View>
                        <Text style={styles.textinfo}>
                            This is an application to list some Marvel
                            Comics
                    </Text>
                        <Text style={styles.textinfo}>
                            using Marvel API
                    </Text>
                        <Text style={styles.textinfo}>
                            (https://developer.marvel.com/)
                    </Text>
                        <Text style={styles.textinfo}>
                            to retrieve the comics data
                    </Text>
                    </View>
                    <View style={styles.btn}>
                        <Button title="List of Heros" onPress={ this.GoToHerosList } />
                    </View>
                </View>
            </>

        );
    };
}



const styles = StyleSheet.create({

    body: {
        alignSelf: 'center',
        padding: '25%',
    },
    textinfo: {
        textAlign: 'center',
    },

    btn: {
        marginTop: '20%',
    }

})

export default AppInfo;