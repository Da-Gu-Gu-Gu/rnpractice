import { StyleSheet, Text, View } from 'react-native'
import {useContext} from 'react'
import { FavoritesContent } from '../store/context/favorites-context'
import { MEALS } from '../data/dummy-data'
import Meal from '../models/meals'
import MealList from '../components/MealsList/MealList'

const WelcomeScreen = () => {

    const favoriteMealsCtx=useContext(FavoritesContent)

    const favoriteMeals=MEALS.filter((x)=>favoriteMealsCtx.ids.includes(x.id))

    if(favoriteMeals.length === 0){
        return <View style={styles.rootContainer}>
            <Text>You hav no favorite meals yet.</Text>
        </View>
    }

  return (
    <View style={styles.rootContainer}>
      <MealList items={favoriteMeals}/>
    </View>
  )
}

export default WelcomeScreen

const styles = StyleSheet.create({
    rootContainer:{
        flex:1,
        backgroundColor:'#fd5da5',
        padding:16,
        alignItems:'center',
        justifyContent:'center'
    }
})