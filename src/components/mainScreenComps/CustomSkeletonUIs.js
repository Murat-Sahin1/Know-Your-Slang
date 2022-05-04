import React from 'react';
import {View, Dimensions, StyleSheet} from 'react-native';
import SkeletonUi from '../generalComps/SkeletonUi';
const {width} = Dimensions.get("window");

const CustomSkeletonUIs = ()=>{
    
    return (<View style={{}}>

        <View style={styles.viewBoxStyle}>
        <SkeletonUi
            height = {40}
            marginTop = {10}
            marginHorizontal = {10}
            width = {70}
            alignSelf = 'flex-start'
            borderRadius = {100}
        />
        <SkeletonUi
            height = {20}
            marginTop = {5}
            marginHorizontal = {10}
            width = {width/3}
            alignSelf = 'flex-start'
            borderRadius = {100}
        />
        <SkeletonUi
            height = {23}
            marginTop = {5}
            marginHorizontal = {10}
            width = {width-40}
            alignSelf = 'flex-start'
            borderRadius = {100}
        />
        <SkeletonUi
            height = {23}
            marginTop = {5}
            marginHorizontal = {10}
            width = {width-40}
            alignSelf = 'flex-start'
            borderRadius = {100}
        />
        <SkeletonUi
            height = {23}
            marginTop = {5}
            marginHorizontal = {10}
            width = {width-40}
            alignSelf = 'flex-start'
            borderRadius = {100}
            marginBottom = {5}
        />
        </View>

        <View style={styles.viewBoxStyle}>
        <SkeletonUi
            height = {40}
            marginTop = {10}
            marginHorizontal = {10}
            width = {70}
            alignSelf = 'flex-start'
            borderRadius = {100}
        />
        <SkeletonUi
            height = {20}
            marginTop = {5}
            marginHorizontal = {10}
            width = {width/3}
            alignSelf = 'flex-start'
            borderRadius = {100}
        />
        <SkeletonUi
            height = {23}
            marginTop = {5}
            marginHorizontal = {10}
            width = {width-40}
            alignSelf = 'flex-start'
            borderRadius = {100}
        />
        <SkeletonUi
            height = {23}
            marginTop = {5}
            marginHorizontal = {10}
            width = {width-40}
            alignSelf = 'flex-start'
            borderRadius = {100}
        />
        <SkeletonUi
            height = {23}
            marginTop = {5}
            marginHorizontal = {10}
            width = {width-40}
            alignSelf = 'flex-start'
            borderRadius = {100}
            marginBottom = {5}
        />
        </View>


        <View style={styles.viewBoxStyle}>
        <SkeletonUi
            height = {40}
            marginTop = {10}
            marginHorizontal = {10}
            width = {70}
            alignSelf = 'flex-start'
            borderRadius = {100}
        />
        <SkeletonUi
            height = {20}
            marginTop = {5}
            marginHorizontal = {10}
            width = {width/3}
            alignSelf = 'flex-start'
            borderRadius = {100}
        />
        <SkeletonUi
            height = {23}
            marginTop = {5}
            marginHorizontal = {10}
            width = {width-40}
            alignSelf = 'flex-start'
            borderRadius = {100}
        />
        <SkeletonUi
            height = {23}
            marginTop = {5}
            marginHorizontal = {10}
            width = {width-40}
            alignSelf = 'flex-start'
            borderRadius = {100}
        />
        <SkeletonUi
            height = {23}
            marginTop = {5}
            marginHorizontal = {10}
            width = {width-40}
            alignSelf = 'flex-start'
            borderRadius = {100}
            marginBottom = {5}
        />
        </View>


        <View style={styles.viewBoxStyle}>
        <SkeletonUi
            height = {40}
            marginTop = {10}
            marginHorizontal = {10}
            width = {70}
            alignSelf = 'flex-start'
            borderRadius = {100}
        />
        <SkeletonUi
            height = {20}
            marginTop = {5}
            marginHorizontal = {10}
            width = {width/3}
            alignSelf = 'flex-start'
            borderRadius = {100}
        />
        <SkeletonUi
            height = {23}
            marginTop = {5}
            marginHorizontal = {10}
            width = {width-40}
            alignSelf = 'flex-start'
            borderRadius = {100}
        />
        <SkeletonUi
            height = {23}
            marginTop = {5}
            marginHorizontal = {10}
            width = {width-40}
            alignSelf = 'flex-start'
            borderRadius = {100}
        />
        <SkeletonUi
            height = {23}
            marginTop = {5}
            marginHorizontal = {10}
            width = {width-40}
            alignSelf = 'flex-start'
            borderRadius = {100}
            marginBottom = {5}
        />
        </View>


<View style={styles.viewBoxStyle}>
        <SkeletonUi
            height = {40}
            marginTop = {10}
            marginHorizontal = {10}
            width = {70}
            alignSelf = 'flex-start'
            borderRadius = {100}
        />
        <SkeletonUi
            height = {20}
            marginTop = {5}
            marginHorizontal = {10}
            width = {width/3}
            alignSelf = 'flex-start'
            borderRadius = {100}
        />
        <SkeletonUi
            height = {23}
            marginTop = {5}
            marginHorizontal = {10}
            width = {width-40}
            alignSelf = 'flex-start'
            borderRadius = {100}
        />
        <SkeletonUi
            height = {23}
            marginTop = {5}
            marginHorizontal = {10}
            width = {width-40}
            alignSelf = 'flex-start'
            borderRadius = {100}
        />
        <SkeletonUi
            height = {23}
            marginTop = {5}
            marginHorizontal = {10}
            width = {width-40}
            alignSelf = 'flex-start'
            borderRadius = {100}
            marginBottom = {5}
        />
        </View>



    </View>)
}

const styles = StyleSheet.create({
    viewBoxStyle:{
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 10,
        paddingBottom: 5,
        margin: 5
    }
})

export default CustomSkeletonUIs;