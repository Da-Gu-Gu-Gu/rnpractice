import { View,Pressable, Text,Image,StyleSheet } from 'react-native'
import {useRoute,useNavigation} from '@react-navigation/native'
import MealDetail from '../MealDetail'

const MealItem = ({id,title,imageUrl,duration,affordability,complexity,}) => {

    const navigation=useNavigation()

    const selectedMealItemHandler=()=>{
    navigation.navigate('MealDetail',{
        mealId:id
    })
}

  return (
    <View style={styles.mealItem}>

        <Pressable 
            android_ripple={{color:'#ccc'}}
            style={({pressed})=>
                pressed && styles.buttonPressed
            }
            onPress={selectedMealItemHandler}
        >
            <View style={styles.innerContainer}>
            <View>
                <Image  
                style={styles.image}
                source={{uri:imageUrl}}
                />
                <Text style={styles.title}>{title}</Text>
            </View>

            <MealDetail  duration={duration} complexity={complexity} affordability={affordability} />

            </View>
        </Pressable>
      
    </View>
  )
}

export default MealItem

const styles=StyleSheet.create({
    mealItem:{
        padding:10,
        margin:16,
        borderRadius:8,
        overflow:'hidden',
        backgroundColor:'white',
        elevation:4,

    },
    innerContainer:{
        borderRadius:8,
        overflow:'hidden'
    },
    image:{
        width:'100%',
        height:200,
    },
    title:{
        fontWeight:'bold',
        textAlign:'center',
        fontSize:18,
        margin:8,

    },
    details:{
        flexDirection:'row',
        alignItems:'center',
        padding:8
    },
    detailItem:{
        marginHorizontal:4,
        fontSize:12,

    },
    buttonPressed:{
        opacity:0.5,
    }
})