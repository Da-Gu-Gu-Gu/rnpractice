import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View ,Text, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CategoriesScreen from './screens/CategoriesScreen';
import MealOverViewScreen from './screens/MealOverViewScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import UserScreen from './screens/UserScreen';
import {Ionicons} from '@expo/vector-icons'
import TabScreentwo from './screens/TabScreentwo';
import TabScreenThree from './screens/TabScreenThree';
import TabScreenFour from './screens/TabScreenFour';
import FavoirtesContextProvider from './store/context/favorites-context';

const Stack=createNativeStackNavigator()
const Drawer=createDrawerNavigator()
const Tab=createBottomTabNavigator()





const TabNavigation=()=>{
  return(
    <Tab.Navigator initialRouteName='tabscreen1' 
      screenOptions={{
        tabBarContentContainerStyle:{backgroundColor:'#95d387'},
        tabBarStyle:{
          backgroundColor:'#128391'
        },
        tabBarActiveTintColor:'white',
        tabBarInactiveTintColor:'#ccc',
        tabBarShowLabel:false,
        headerShown:false
      }}
    >
      <Tab.Screen name="tabscreen1" 
      component={CategoriesScreen} 
        options={{
  
          tabBarIcon:({color,size})=><Ionicons name="home" color={color} size={size} />
        }}
      />
      <Tab.Screen name="tabscreen2" component={TabScreentwo} />
      <Tab.Screen name="tabscreen3" component={TabScreenThree} />
      <Tab.Screen name="tabscreen4" component={TabScreenFour} />
    </Tab.Navigator>
  )
}

const DrawNavigation=()=>{
  return(
    <Drawer.Navigator
          screenOptions={
            {
              headerStyle:{
                backgroundColor:'#128391',
              },
              headerTintColor:'white',
              drawerActiveBackgroundColor:'#3bbdc6',
              drawerActiveTintColor:'#fff4b2',
              drawerStyle:{
                backgroundColor:'#128391'
              },
           
            }
          }
          initialRouteName="Home"
          >            
          <Drawer.Screen name="Home"  component={TabNavigation}
            options={{
              drawerLabel:'Home Screen',
              // headerShown:false,
              drawerIcon:(({color,size})=><Ionicons name='home' size={size} color={color} />)
            }}
          />
            <Drawer.Screen name="Favorites"  
            component={WelcomeScreen}
            options={{
              drawerIcon:(({color,size})=><Ionicons name='star' size={size} color={color} />)
            }}
            />
            <Drawer.Screen name="User" 
            options={{
              drawerIcon:(({color,size})=><Ionicons name='person' size={size} color={color} />)
            }}
            component={UserScreen}/>

          </Drawer.Navigator>
  )
}

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style='light'/>
      <FavoirtesContextProvider >
            <NavigationContainer>
                <Stack.Navigator initialRouteName='MealCategories'
              screenOptions={{
                headerStyle:{
                  backgroundColor:'#212121',
                },
                contentStyle:{backgroundColor:'#95d387'},
                headerTintColor: '#fff',
              
              }}
            >
              <Stack.Screen name="MealCategories" component={DrawNavigation} 
                options={{
                  title:'All Categories',
                  headerShown:false,
                }}
              />
              <Stack.Screen 
              name="MealsOverview" 
              component={MealOverViewScreen} 

              />
              <Stack.Screen 
              name="MealDetail" 
              component={MealDetailScreen} 
              options={{
                headerShown:true
              }}
              />
                </Stack.Navigator>
            </NavigationContainer>
      </FavoirtesContextProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   flex:1,
  },
});
