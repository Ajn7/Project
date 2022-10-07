import { StyleSheet, Text, View ,Image,TouchableOpacity} from 'react-native'
import React from 'react'
import Title from '../components/title'
import { STAIMG } from '../assets'
import Home from './login'

const Start = ({navigation}) => {

  return (
    <View>
      <Title/>
      <View style={styles.bannerContainer}>
        <Image 
        source= {STAIMG}
         style={styles.banner}
         resizeMode="center"
         
         /> 
      
       <TouchableOpacity style={styles.begin} onPress={()=>navigation.navigate("Login")}>
       <Text style={styles.begin} >Let's Start </Text>
        </TouchableOpacity> 
        </View>
    </View>
  )
}

export default Start

const styles = StyleSheet.create({
    bannerContainer:{
             justifyContent:'center',
             alignItems:'center',
             
    },
    banner:{
        height:500,
        width:300,
        
    },
    begin:{
      backgroundColor:'#4895ef',
      padding:10,
      width:'60%',
      borderRadius:5,
      justifyContent:'space-between',
      fontSize:18,
      alignItems:'center',
      color:'#ffff',
      fontWeight: 'bold',
      
      
    }
})