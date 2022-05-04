import React, {useRef, useEffect} from 'react';
import {View,StyleSheet, Dimensions, Animated, Easing} from 'react-native';

const SkeletonUi = ({height, alignSelf, width, borderRadius, marginTop, marginHorizontal, marginBottom})=>{

    return(
    <View 
        style = {{
        backgroundColor: '#a0a0a0',
        alignSelf: alignSelf,
        borderWidth: 1,
        height: height,
        width: width,
        marginTop: marginTop,
        marginHorizontal: marginHorizontal,
        borderRadius: borderRadius,
        marginBottom: marginBottom
    }}>        
    </View>
    );
}

const styles =  StyleSheet.create({
    AnimatedViewStyle:{
       
    }
});

export default SkeletonUi;