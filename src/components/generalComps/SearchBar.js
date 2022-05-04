import React from 'react';
import {TextInput, View, StyleSheet, Pressable} from 'react-native';
import {AntDesign, Ionicons} from '@expo/vector-icons';
import LightModeButton from '../mainScreenComps/LightModeButton';

const SearchBar = ({navigation, term, onTermChange, onTermSubmit})=>{

    return <View style= {styles.containerViewStyle}>
        <View style = {styles.PressableViewStyle}>
        <Pressable style = {styles.goBackPressableStyle}
        onPress={()=>{
            navigation.goBack();
        }}
        >        
        <Ionicons name="chevron-back-sharp" style = {styles.backIconStyle}/>
        </Pressable>
        </View>
        <View style= {styles.SearchBarViewStyle}>
        <AntDesign name="search1" style = {styles.IconStyle} color ="black"/>
        <TextInput style = {styles.TextInputStyle}
        placeholder = "Search"
        placeholderTextColor='#858585'
        autoCorrect = {false}
        autoComplete = {false}
        value={term}
        onChangeText = {text => onTermChange(text)}
        onSubmitEditing = {()=>onTermSubmit()}
        />
        </View>
    </View>;
};

const styles = StyleSheet.create({
    containerViewStyle:{
        backgroundColor: '#212129',
        height: 85,
        flexDirection: 'row',
        alignItems: 'flex-end',
        paddingBottom: 10,
        justifyContent: 'flex-end'
    },

    SearchBarViewStyle:{
        flexDirection: 'row',
        flex: 1,
        height:45,
        borderRadius:8,
        marginRight:10,
        backgroundColor: '#4c5265'
    },
    TextInputStyle:{
        flex:1,
        fontSize:17,
    },
    IconStyle:{
        alignSelf: 'center',
        marginHorizontal: 10,
        fontSize: 30, 
    },
    goBackPressableStyle:{
        height:40,
        width:40,
        borderRadius: 100,
        backgroundColor: '#323949',
        justifyContent: 'center',
        alignItems: 'center'
    },
    backIconStyle:{
        fontSize: 30,
        color: 'black',
    },
    PressableViewStyle:{
        height: 45,
        width: 60,
        backgroundColor: '#212129',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

/*

*/


export default SearchBar;