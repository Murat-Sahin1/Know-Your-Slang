import React, {useState, useEffect} from 'react';
import {TouchableOpacity, View, StyleSheet, FlatList} from 'react-native';
import ItemDetail from "./ItemDetail";
import {withNavigation} from 'react-navigation';
import {SkeletonUi} from '../generalComps/SkeletonUi';


const ListOfResults = ({resultsList, navigation, isLoading})=>{

    return(<View style = {styles.viewStyle}>
        <FlatList
        style = {styles.flatListView}
        data = {resultsList.list}
        showsVerticalScrollIndicator = {false}
        keyExtractor = {(item)=>item.defid.toString()}
        renderItem = {({item})=>{
            isLoading
            return(
            <TouchableOpacity
            activeOpacity = {0.4}
            onPress = {()=>{navigation.navigate('SlangDetail', {result: item})}
            }>
                <ItemDetail result = {item} /> 
               
            </TouchableOpacity>
            )
        }}
        />   
    </View>)
};


// {isLoading ? () : <SkeletonUi />}
const styles = StyleSheet.create({
    viewStyle:{
        flex:1,
        backgroundColor: '#323949',
    },
    flatListView:{
        
    }
});

export default withNavigation(ListOfResults);