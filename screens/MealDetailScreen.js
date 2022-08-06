import { useLayoutEffect } from 'react'
import { View, Text,Image,StyleSheet,ScrollView, Button } from 'react-native'
import IconButton from '../components/IconButton'

import MealDetail from '../components/MealDetail'
import List from '../components/MealDetail/List'
import SubTitile from '../components/MealDetail/SubTitile'
import { MEALS } from '../data/dummy-data'
import { useContext } from 'react'
import { FavoritesContent } from '../store/context/favorites-context'

const MealDetailScreen = ({route,navigation}) => {

    const favoriteMealContext=useContext(FavoritesContent)

    const mealId=route.params.mealId
  
    const selectedMeal=MEALS.find((meal)=>meal.id===mealId)

    const mealIsFavorite=favoriteMealContext.ids.includes(mealId)

    const changeFavoriteStatusHandler=()=>{
        if(mealIsFavorite){
            favoriteMealContext.removeFavorite(mealId)
        }else{
            favoriteMealContext.addFavorite(mealId)
        }
    }

    useLayoutEffect(()=>{
        navigation.setOptions({
            headerRight:()=>{
                return <IconButton 
                    icon={mealIsFavorite?'star':'star-outline'}
                onPress={changeFavoriteStatusHandler}/>
            }
        })
    },[navigation,changeFavoriteStatusHandler])

    return (
    <ScrollView style={styles.rootContainer}>
        <View>
            <Image 
            style={styles.image}
            source={{uri:selectedMeal.imageUrl}}
            />

        <Text style={styles.title}>{selectedMeal.title}</Text>
        <MealDetail 
        duration={selectedMeal.duration}
        complexity={selectedMeal.affordability}
        affordability={selectedMeal.affordability}
        textStyle={styles.detailText}
        />
        <SubTitile>Ingredients</SubTitile>
        <List data={selectedMeal.ingredients} />
        <SubTitile>Steps</SubTitile>
        <List data={selectedMeal.steps} />
        </View>
    </ScrollView>
  )
}

export default MealDetailScreen

const styles=StyleSheet.create({
    rootContainer:{
        marginBottom:32,
    },
    image:{
        width:'100%',
        height:350,
    },
    title:{
        fontWeight:'bold',
        fontSize:24,
        margin:8,
        textAlign:'center',
    },
    detailText:{
        color:'#202249',
        textAlign:'center'
    },
    



  
})