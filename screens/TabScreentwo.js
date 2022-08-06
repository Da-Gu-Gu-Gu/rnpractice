import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

const TabScreentwo = () => {
  return (
    <View style={styles.rootContainer}> 
      <Text>TabScreentwo</Text>
    </View>
  )
}

export default TabScreentwo

const styles=StyleSheet.create({
    rootContainer:{
        flex:1,
        backgroundColor:'#fc7802',
        color:'white',
        alignItems:'center',
        justifyContent:'center'
    }
})