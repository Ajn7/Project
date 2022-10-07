import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Start from './screens/start'
import { createStackNavigator } from '@react-navigation/stack'
import Signup from './screens/signup'
import Home from './screens/homepage'
import Login from './screens/login'


const Stack=createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
   <Stack.Navigator screenOptions={{
          cardStyle: {
            backgroundColor: '#fff',
            animationEnabled: false,
            headerShown: false,
          }}}>
    <Stack.Screen
    name="Start"
    component={Start}
    options={{headerShown:false}}
     />
   

   <Stack.Screen
    name="Login"
    component={Login}
    options={{title:"Login"}}
     />
     
     <Stack.Screen
    name="Home"
    component={Home}
    options={{title:"Home Screen"}}
     />
     <Stack.Screen
    name="Signup"
    component={Signup}
    options={{title:"Signup Screen"}}
     />
   </Stack.Navigator>

     
    </NavigationContainer>
    // <View style={styles.container}>

    //    <Start/>
     
    // </View>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
   paddingTop:40,
   paddingHorizontal:16,
  }
})