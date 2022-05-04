import React, {useState} from 'react'
import {View, StyleSheet, TouchableOpacity} from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';


const LightModeButton = ()=>{

    const [iconName, setIconName] = useState('lightbulb-on-outline');
    const [toggle, setToggle] = useState(false);
    const [theme, setTheme] = useState(['#212129','black','black']);

    const styles = StyleSheet.create({
        viewStyle:{
            height: 60,
            flexDirection: 'column',
            width: 60,
            justifyContent: 'center',
            borderWidth: 1,
            borderColor: theme[1],
            backgroundColor: theme[0],
            borderRadius:100,
            position: 'absolute',
            bottom: 15,
            right: 25,
    
        },
        iconStyle:{
            alignSelf: 'center',
            fontSize: 30,
            color: theme[2]
        }
    })

    return (
        <TouchableOpacity 
        style = {styles.viewStyle}
        activeOpacity = {0.9}

        onPress = {()=>{
            if(toggle == false){
                setIconName("lightbulb-off-outline");
                setTheme(['white','black','red']);
            } else{
                setIconName("lightbulb-on-outline");
                setTheme(['#212129','black','black']);
            } 
            setToggle(!toggle);
        }}

        >
            <MaterialCommunityIcons style = {styles.iconStyle} name={iconName}/>
        </TouchableOpacity>
    );
}


export default LightModeButton;