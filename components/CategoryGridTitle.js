import { View, Text,Pressable,StyleSheet } from 'react-native'


const CategoryGridTitle = ({title,color,onPress}) => {


  return (
    <View style={[styles.gridItem,{backgroundColor:color}]}>
        <Pressable 
        android_ripple={{color:'#ccc',}}
        style={({pressed})=>[styles.button,pressed && styles.buttonPressed]}
        onPress={onPress}
        >
            <View style={styles.innderContainer}>
                <Text style={styles.title}>{title}</Text>
            </View>
        </Pressable> 
    </View>
  )
}

export default CategoryGridTitle

const styles=StyleSheet.create({
    gridItem:{
        flex:1,
        margin:16,
        height:150,
        backgroundColor:'white',
        borderRadius:8,
        elevation:4,
        overflow:'hidden'
    },
    button:{
       flex:1, 
    },  
    innderContainer:{
        flex:1,
        // padding:16,
        borderRadius:8,
        justifyContent:'center',
        alignItems:'center'
    },
    buttonPressed:{
        opacity:0.5,
    },
    title:{
        fontWeight:'bold',
        fontSize:18
    }
})