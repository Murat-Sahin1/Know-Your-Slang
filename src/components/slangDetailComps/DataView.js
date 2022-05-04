import React, {useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import { Feather } from '@expo/vector-icons';
import ItalicText from '../generalComps/ItalicText';


const DataView = ({result})=>{
    const [like, setLike] = useState(result.thumbs_up);
    const [dislike, setDislike] = useState(result.thumbs_down);

    const timeFormer = (string)=>{
        var newString = '';
        var timeArray = [];
        for (let i = 0; i<10; i++){
            newString = newString + string[i];
        }
        timeArray = newString.split("-", 3);

        switch(timeArray[1]){
            case("01"): newString = timeArray[2] + " " +  "Jan" + " " + timeArray[0];
            case("02"): newString = timeArray[2] + " " +  "Feb" + " " + timeArray[0];
            case("03"): newString = timeArray[2] + " " +  "Mar" + " " + timeArray[0];
            case("04"): newString = timeArray[2] + " " +  "Apr" + " " + timeArray[0];
            case("05"): newString = timeArray[2] + " " +  "May" + " " + timeArray[0];
            case("06"): newString = timeArray[2] + " " +  "Jun" + " " + timeArray[0];
            case("07"): newString = timeArray[2] + " " +  "Jul" + " " + timeArray[0];
            case("08"): newString = timeArray[2] + " " +  "Aug" + " " + timeArray[0];
            case("09"): newString = timeArray[2] + " " +  "Sept" + " " + timeArray[0];
            case("10"): newString = timeArray[2] + " " +  "Oct" + " " + timeArray[0];
            case("11"): newString = timeArray[2] + " " +  "Nov" + " " + timeArray[0];
            case("12"): newString = timeArray[2] + " " +  "Dec" + " " + timeArray[0];
            default: null;
        }
        return (newString);
    };

    return(<>
        
        <View style = {styles.definitionView}>
        <Text style = {styles.headerTextStyle}>{result.word}</Text>

        <View style = {styles.authorView}>
        <Text style = {styles.authorTextStyle}>by {result.author}</Text>
        <Text style = {styles.authorTextStyle}>{timeFormer(result.written_on)}</Text>
        </View>

        <Text style = {styles.definitionTextStyle}><ItalicText text = {result.definition}></ItalicText></Text>
        </View>

        <View style = {styles.exampleView}>
        <Text style = {styles.exampleText}>Example</Text>
        <Text style = {styles.exampleDefinition}><ItalicText text = {result.example}/></Text>
        </View>

        <View style = {styles.ratingView}>
        <TouchableOpacity onPress = {()=>{setLike(like+1)}}> 
        <Feather name="thumbs-up" size={24} color="#D7D6D9" />
        </TouchableOpacity>
        <Text style = {styles.ratingText}>{like}</Text>
        <TouchableOpacity onPress = {()=>{setDislike(dislike+1)}}>
        <Feather name="thumbs-down" size={24} color="#D7D6D9" />
        </TouchableOpacity>
        <Text style = {styles.ratingText}>{dislike}</Text>
        </View>
        
        </>)
};

const styles = StyleSheet.create({
    viewStyle:{
        flex: 1
    },

    definitionView: {
        borderWidth:1,
        backgroundColor: '#3d3e51',
        borderRadius: 10,
        marginTop: 10,
        marginHorizontal: 10
    },
    headerTextStyle:{
        fontSize: 33,
        marginLeft: 10,
        color: '#D7D6D9',
        fontWeight: 'bold'
    },
    authorView:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    authorTextStyle:{
        color: '#8E9297',
        marginHorizontal: 10,
        fontSize: 15,
    },
    definitionTextStyle:{
        color: '#D7D6D9',
        marginLeft: 10,
        fontSize: 18,
        marginBottom:15
    },
    exampleView:{
        borderWidth:1,
        backgroundColor: '#3d3e51',
        borderRadius: 10,
        marginTop: 10,
        marginHorizontal: 10
    },
    exampleText:{
        fontSize: 27,
        marginLeft: 10,
        color: '#D7D6D9',
        fontWeight: 'bold'
    },
    exampleDefinition:{
        color: '#D7D6D9',
        marginLeft: 10,
        fontSize: 18,
        marginTop: 10,
        marginBottom: 10,
        fontStyle: 'italic'
    },
    ratingView:{
        flexDirection: 'row',
        marginLeft: 10,
        alignItems: 'center',
        marginVertical: 15
    },
    ratingText: {
        color: '#8E9297',
        fontSize: 16,
        marginHorizontal: 10
    },
    ratingIconView:{
        
    }
});

export default DataView;