import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import ItalicText from '../generalComps/ItalicText';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

const ItemDetail = ({result})=>{

    let [fontsLoaded] = useFonts({
        'Oswald-Regular': require('../../../assets/fonts/Oswald-Regular.ttf')
    });

    if(!fontsLoaded){
        <AppLoading/>
    }

    if(!result){
        return null;
    }
    
    return(<View style = {styles.viewStyle}>
        <Text style = {styles.wordView}>{result.word}</Text>
        <Text style = {styles.authorView}>by {result.author}</Text>
        <Text style = {styles.definitionView}><ItalicText text={result.definition} /></Text>
    </View>);
};

const styles = StyleSheet.create({
    viewStyle:{
        borderWidth:1,
        backgroundColor: '#3d3e51',
        borderRadius: 10,
        marginTop: 10,
        marginHorizontal: 10
    },
    wordView:{
        fontSize: 30,
        fontWeight: 'bold',
        marginLeft: 10,
        color: '#D7D6D9',
        fontFamily: 'Oswald-Regular'
    },
    authorView:{
        color: '#8E9297',
        marginLeft: 10,
        fontSize: 20,
        fontFamily: 'Oswald-Regular'
    },
    definitionView:{
        color: '#D7D6D9',
        marginLeft: 10,
        fontSize: 20,
        marginBottom:10,
        fontFamily: 'Oswald-Regular'
    },
    italicStyle:{
        fontStyle: "italic",
        fontWeight: "bold",
        
    }
});

export default ItemDetail;