import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, FlatList } from 'react-native';
import { Actions } from 'react-native-router-flux';

class ComicsList extends React.Component {

    state = {
        heros: []
    }

    async componentDidMount() {
        this.GetHeros();
    }

    async GetHeros() {
        const url = "http://gateway.marvel.com/v1/public/characters?apikey=eb7893a70746155a01e4756a5429e6aa&ts=1&hash=8e6adb9f38d3098972abec323adbd973";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({
            heros: data.data.results
        })
    }

    GetHeros = this.GetHeros.bind(this);

    goto(id) {
        this.state.heros;
        console.log("heros before ");
        console.log(id)
        Actions.ComicsList({ id: id });
    }

    goto = this.goto.bind(this);

    render() {
        return (
            <>
                <SafeAreaView >
                    <FlatList
                        data={this.state.heros}
                        renderItem={({ item, index }) => {
                            return (
                                <TouchableOpacity onPress={() => this.goto(item.id)} >
                                    <View style={styles.herosbox} >
                                        <View style={{ flexDirection: 'column', justifyContent: 'space-between' }}>
                                            <Text style={styles.text} >{item.name}</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            );
                        }
                        }
                        keyExtractor={item => item.id.toString()}
                    />
                </SafeAreaView>
            </>
        );
    };
}

const styles = StyleSheet.create({

    herosbox: {
        width: '85%',
        backgroundColor: '#f1f9ff',
        alignSelf: 'center',
        marginTop: '5%',
        alignItems: 'center',
        padding: '5%'
    },

    text: {
        width: '70%',
        height: 25,
        color: '#2699fb',
        fontFamily: 'Arial',
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 24,
        alignSelf: 'center',
    },

})

export default ComicsList;