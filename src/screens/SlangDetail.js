import React, {useState} from 'react';
import {ScrollView, View, StyleSheet} from 'react-native';
import DataView from '../components/slangDetailComps/DataView';
import SearchBar from '../components/generalComps/SearchBar';

const SlangDetail = ({navigation})=>{
    const result = navigation.getParam('result');
    const [searchedTerm, setSearchedTerm] = useState("");
    
    return (<View style = {styles.viewStyle}>
        <SearchBar
            term={searchedTerm}
            onTermChange = {(value)=>{setSearchedTerm(value)}}
            onTermSubmit = {()=>{navigation.navigate('main', {searchedTerm: searchedTerm}) }}
            navigation = {navigation}
        />
        <ScrollView>
        <DataView 
        result = {result}
        />
        </ScrollView>
    </View>);
};

const styles = StyleSheet.create({
    viewStyle:{
        flex: 1,
        backgroundColor: "#323949",
    }
});

export default SlangDetail;