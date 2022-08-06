import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const UserScreen = () => {
  return (
    <View style={styles.rootContainer}>
      <Text>UserScreen</Text>
    </View>
  )
}

export default UserScreen

const styles = StyleSheet.create({
    rootContainer:{
        flex:1,
        backgroundColor:'red'
    }
})