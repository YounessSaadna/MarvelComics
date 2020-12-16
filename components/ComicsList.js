import React from 'react';
import { View, Text, StyleSheet, Image, Button, TextInput, TouchableOpacity, SafeAreaView, FlatList } from 'react-native';
import { Actions } from 'react-native-router-flux';


class ComicsList extends React.Component {

    state = {
        comics: []
    }

    componentDidMount() {
        console.log(this.props.id);
        this.GetComicsByHero();
    }
    async GetComicsByHero() {
        const url = "http://gateway.marvel.com/v1/public/characters/"+this.props.id+"/comics?apikey=eb7893a70746155a01e4756a5429e6aa&ts=1&hash=8e6adb9f38d3098972abec323adbd973";
        const response = await fetch(url);
        const data = await response.json();
        console.log(data.data.results)
          this.setState({
              comics: data.data.results,
          })
        // //console.log(this.state.comics);
    }
    GetComicsByHero = this.GetComicsByHero.bind(this);

    goback() {
        Actions.pop()
    }
    render() {
        return (

            <>
               <SafeAreaView style={styles.rectangle14}>
                    <FlatList style={styles.rectangle10}
                        data={this.state.comics}
                        renderItem={({ item, index }) => {

                            return (
                                <TouchableOpacity>
                                    <View style={styles.comicsbox} >
                                        <View style={{ flexDirection: 'column', justifyContent: 'space-between' }}>

                                        <Image source={item.thumbnail.path} />
                                        <Text style={styles.excepteurSint} >{item.thumbnail.path}</Text>

                                            <Text style={styles.excepteurSint} >{item.title}</Text>
                                            <Text style={styles.excepteurSint} >{item.prices[0].type}</Text>
                                            <Text style={styles.excepteurSint} >{item.prices[0].price}</Text>
                                            </View>


                                    </View>
                                </TouchableOpacity>
                            );
                        }

                        }
                        keyExtractor={item => item.resourceURI.toString()}

                    />

                </SafeAreaView>

            </>

        );
    };
}



const styles = StyleSheet.create({

    comicsbox: {
        width: '85%',
        backgroundColor: '#f1f9ff',
        alignSelf: 'center',
        marginTop: '5%',
        alignItems: 'center',
        padding: '5%'
    },
    excepteurSint: {
        width: '70%',
        height: 25,
        color: '#2699fb',
        fontFamily: 'Arial',
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 24,
        alignSelf: 'center',
    },
    rectangle14: {
        flex: 1,
        width: '100%',
        height: '100%',
        borderColor: '#707070',
        borderStyle: 'solid',
        backgroundColor: '#ffffff',
    },

})

export default ComicsList;