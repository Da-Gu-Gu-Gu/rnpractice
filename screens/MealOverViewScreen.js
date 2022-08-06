import { View, Text,StyleSheet,FlatList } from 'react-native'
import React,{useLayoutEffect} from 'react'
import { MEALS,CATEGORIES } from '../data/dummy-data'
import MealItem from '../components/MealsList/MealItem'
import MealList from '../components/MealsList/MealList'

const MealOverViewScreen = ({route,navigation}) => {

    const catId=route.params.categoryId

    const displayedMeals=MEALS.filter((x)=>{
        return x.categoryIds.indexOf(catId)>=0
    })

    useLayoutEffect(()=>{
        const categoryTitle=CATEGORIES.find((category)=>{
            return  category.id===catId
          }).title;

          navigation.setOptions({
            title:categoryTitle
        })
    },[catId,navigation])

   

   

 
  return ( 
    <MealList items={displayedMeals} />
  )
}

export default MealOverViewScreen

const styles=StyleSheet.create({
    container:{
        flex:1,
        padding:16
    }
})