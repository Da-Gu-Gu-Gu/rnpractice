import {CATEGORIES} from '../data/dummy-data'
import { View, Text,FlatList } from 'react-native'
import React from 'react'
import CategoryGridTitle from '../components/CategoryGridTitle'



const CategoriesScreen = ({navigation}) => {

const renderCategoryItem=(itemData)=>{

    const pressHandler=()=>{
        navigation.navigate('MealsOverview',{
            categoryId:itemData.item.id,

        })
    }

    return (
        <CategoryGridTitle 
        title={itemData.item.title} 
        color={itemData.item.color}
        onPress={pressHandler}
        />
    )
}

  return (
    <View style={{backgroundColor:'#95d387',flex:1}}>
      <FlatList 
        data={CATEGORIES}
        keyExtractor={(itemData)=>itemData.id}
        renderItem={renderCategoryItem}
        numColumns={2}
      />
    </View>
  )
}

export default CategoriesScreen