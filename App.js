import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Home from './screens/home'
import Start from './screens/start'
import { createStackNavigator } from '@react-navigation/stack'
import Result from './screens/result'
import Signup from './screens/signup'


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
    component={Home}
    options={{title:"Login"}}
     />
     
     <Stack.Screen
    name="Result"
    component={Result}
    options={{title:"Result Screen"}}
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