import React, {useState} from 'react'
import {Text, StyleSheet, View} from 'react-native'
import {withNavigation} from 'react-navigation';

export default withNavigation(function ItalicText({text, navigation}) {
    const [color, setColor] = useState("#94AEBF");

    const styles = StyleSheet.create({
        italicStyle:{
            fontWeight: '600',
            fontStyle: 'italic',
            textDecorationLine: 'underline',
            color: color,
            flex: 1,
            alignSelf:'center'

        }, touchableStyle:{
            alignItems: 'center',
            flex:1,
            alignSelf: 'center',

        }, containerTextStyle:{
            flexDirection: 'row', 
            justifyContent: 'center', 
            alignItems: 'center' 
        }
    });

        const components = parseText(text)
            .map(({type, value}, i) => {
                switch (type) {
                    case "text":
                        return value
                    case "italic":
                        return <Text 
                        key = {i}
                        style={styles.italicStyle} 
                        onPress = {() =>{
                            const newColor = "#B5D5EB";
                            setColor(newColor);
                            navigation.navigate('main', {searchedTerm:value});
                        }}>
                            {value}
                        </Text>
                }
            });
            function parseText(text) {
                const addValue = (type, {result, working}) => result.push({type, value: working.join("")});
                const toggle = (obj) => {
                    obj.working = [];
                    obj.isWorking = !obj.isWorking;
                };
                const fetchWorking = (type, obj) => {
                    addValue(type, obj);
                    toggle(obj);
                    return obj;
                }
                const parsed = text.split("").reduce((acc, cur) => {
                    if (acc.isWorking && cur === "]") return fetchWorking("italic", acc);
                    if (cur === "[") return fetchWorking("text", acc);
                    acc.working.push(cur);
                    return acc;
                }, {result: [], isWorking: false, working: []});
                
                addValue("text", parsed);
                return parsed.result;
            }

        return(
            <Text style = {styles.containerTextStyle}>
                {components}
            </Text>
        )   
    });