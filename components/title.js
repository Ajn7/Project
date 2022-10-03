import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Title = () => {
  return (
    
      <SafeAreaView style={styles.safearea}>
        <View>
      <Text  style={styles.title}>Dementia Care</Text>
      </View>
      </SafeAreaView>
      
    
  )
}

export default Title

const styles = StyleSheet.create({
  title:{
   
    fontSize:30,
    color:'#000000',
    fontWeight:'bold',
    
    
  },
  safearea:{
    
    alignItems:'center',
    justifyContent:'center'
  }
})