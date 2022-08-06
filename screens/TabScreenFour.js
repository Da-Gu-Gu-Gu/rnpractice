import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

const TabScreenFour = () => {
  return (
    <View style={styles.rootContainer}>
      <Text>TabScreenFour</Text>
    </View>
  )
}

export default TabScreenFour

const styles=StyleSheet.create({
    rootContainer:{
        flex:1,
        backgroundColor:'#d5b3ff',
        color:'white',
        alignItems:'center',
        justifyContent:'center'
    }
})