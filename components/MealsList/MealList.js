import { StyleSheet, Text,FlatList, View } from 'react-native'
import MealItem from './MealItem'
import React from 'react'

const MealList = ({items}) => {

    const renderMealList=(itemData)=>{
        const item=itemData.item

        const mealItemProps={
            id:item.id,
            title:item.title,
            imageUrl:item.imageUrl,
            complexity:item.complexity,
            affordability:item.affordability,
            duration:item.duration,
    
        }
        return(

            <MealItem 
            {...mealItemProps}
           />
        
        )
    }
 
   

    return(
    
        <View style={styles.container}>
        <FlatList data={items}
            keyExtractor={(item)=>item.id}
            renderItem={renderMealList}
        />
    </View>
    
  )
}

export default MealList

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:16
    }
})