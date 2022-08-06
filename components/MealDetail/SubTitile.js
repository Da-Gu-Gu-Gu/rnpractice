import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

const SubTitile = ({children}) => {
  return (
    <View style={styles.subtitleContainer}>
    <Text style={styles.subTitle}>{children}</Text>
    </View>
  )
}

export default SubTitile

const styles=StyleSheet.create({
    subTitle:{
        color:'#ffe285',
        fontSize:18,
        fontWeight:'bold',
        textAlign:'center',

    },
    subtitleContainer:{
        padding:6,
        margin:8,
        marginHorizontal:24,
        width:'80%',
        alignSelf:'center',
        borderBottomColor:'white',
        borderBottomWidth:2
    }
})