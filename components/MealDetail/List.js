import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

const List = ({data}) => {
  return (
    <View style={styles.listContainer}>
       {data.map((x)=>
            <Text style={styles.listText} key={x}>{x}</Text>
        )}
    </View>
  )
}

export default List

const styles=StyleSheet.create({
    listContainer:{
        alignSelf:'center',
        width:'80%',
        backgroundColor:'white',
        borderRadius:10,
        padding:5,
        
    },
    listText:{
        borderRadius:12,
        paddingVertical:10,
        backgroundColor:'#ffe285',
        marginVertical:10,
        textAlign:'center'
    }
})