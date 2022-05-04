//styled-components, react navigation, stack navigation, redux, react-redux, redux-thunk
import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import SearchBar from '../components/generalComps/SearchBar';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import LightModeButton from '../components/mainScreenComps/LightModeButton';
//import { CustomSkeletonUIs } from '../components/mainScreenComps/CustomSkeletonUIs';

const welcomeScreen = (props) =>{
    const [searchedTerm, setSearchedTerm] = useState("");
    
    let [fontsLoaded] = useFonts({
        'Oswald-Regular': require('../../assets/fonts/Oswald-Regular.ttf'),
        'Oswald-SemiBold': require('../../assets/fonts/Oswald-SemiBold.ttf')
    });

    if(!fontsLoaded){
        <Text></Text>
    }

    return (
    <View style = {styles.viewStyle}>
         
        <View style = {styles.searchBarStyle}>
        <SearchBar 
        term={searchedTerm}
        onTermChange = {(value)=>{setSearchedTerm(value)}}
        onTermSubmit = {()=>{props.navigation.navigate('main', {searchedTerm: searchedTerm}) }}
        navigation = {props.navigation}
        />
        </View>

        <View style = {styles.textViewStyle}>
        <Text style = {styles.textStyle}>Welcome to Know Your Slang!</Text>
        <Text style = {styles.definitionTextStyle}>Just type the slang you want to learn about.</Text>
        </View>

        <LightModeButton

        />
        
    </View>
    );
    
};

const styles = StyleSheet.create({
    viewStyle:{
        flex: 1,
        backgroundColor:'#323949',
        flexDirection: 'column',
    },
    searchBarStyle:{
        
    },
    textViewStyle:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#dc143c',
        
    },
    textStyle:{
        fontSize: 27,
        color: '#D7D6D9',
        fontFamily: 'Oswald-SemiBold'
    },
    definitionTextStyle:{
        color: '#D7D6D9',
        fontSize: 22,
        fontFamily: 'Oswald-Regular'
    }
});

export default welcomeScreen;