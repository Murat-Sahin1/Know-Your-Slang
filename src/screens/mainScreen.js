import React, {useState, useEffect} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import SearchBar from '../components/generalComps/SearchBar';
import ListOfResults from '../components/mainScreenComps/ListOfResults';
import useApi from '../hooks/useApi';
import {withNavigation} from 'react-navigation';
import CustomSkeletonUIs from '../components/mainScreenComps/CustomSkeletonUIs';

const mainScreen = (props) =>{
    const givenTerm = props.navigation.getParam('searchedTerm');
    const [term, setTerm] = useState("");
    const [apiSearch, errMessage, result] = useApi();
    const [loading, setLoading] = useState(false);
    
    useEffect(()=>{
        setLoading(true);
    })

    useEffect(()=>{
        let unmounted= false;
        if(!unmounted){
            apiSearch(givenTerm)
            setLoading(false);
        }
        return () => {unmounted = true};
    },[givenTerm]);
    console.log(loading)
        return(
        <View style = {{flex:1, backgroundColor: '#323949'}}>    
            <SearchBar
            term= {term}
            onTermChange={(value) =>setTerm(value)}
            onTermSubmit={()=>apiSearch(term)}
            navigation = {props.navigation}
            />
            {errMessage ? <Text>{errMessage}</Text>: null}
            {loading ? (<ListOfResults 
                resultsList = {result}
            />  ): <CustomSkeletonUIs/>
            }   
        </View>
   );
};

const styles = StyleSheet.create({
    textStyle:{
        fontSize: 25
    }
});

export default withNavigation(mainScreen);