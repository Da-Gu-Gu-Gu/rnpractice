import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

const TabScreenThree = () => {
  return (
    <View style={styles.rootContainer}>
      <Text>TabScreenThree</Text>
    </View>
  )
}

export default TabScreenThree

const styles=StyleSheet.create({
    rootContainer:{
        flex:1,
        backgroundColor:'#f7a2a1',
        color:'white',
        alignItems:'center',
        justifyContent:'center'
    }
})