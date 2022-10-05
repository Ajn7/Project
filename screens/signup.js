import { StyleSheet, Text, View ,Image,TouchableOpacity} from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-gesture-handler'


const Signup = ({navigation}) => {
    const [name,setName]=useState("");
    const [email, setEmail] = useState("");
    const [password1, setPassword1] = useState("");
    const [password2, setPassword2] = useState("");
  
const Check =async()=>{

    if (!name.trim()) {

        alert('Please Enter Name');
  
        return;
  
      }

    if (!email.trim()) {

        alert('Please Enter Email');
  
        return;
  
      }
  
      if (!password1.trim()) {
  
        alert('Please Enter Password');
  
        return;
  
      }

      if (!password2.trim()) {
  
        alert('Please Re-enter Password');
  
        return;
  
      }

      if(password1 != password2){
        alert('Password and Conform Password Must be Same');
  
        return;
      }

    //api post requset
    //sample api https://webhook.site/f555502c-d993-4162-bc33-bda041e5ff90
    // http://10.0.2.2:2000/adduser (10.0.2.2) points to localhost

      try{
        await fetch('http://10.0.2.2:2000/adduser',{
          method:'post',
          mode:'no-cors',
          headers:{
             'Accept':'application/json',
             'Content-Type':'application/json'
  
          },
          body:JSON.stringify({
            "email":email,
            "password":password1 //username
          })
        });
      }catch(e){
          console.log(e);
      }
    navigation.navigate("Result",{
        paramKey1: email,
       
      })
};
  return (
    <View style={styles.Container}>
    <TextInput 
    placeholder='Name' onChangeText={(name) => setName(name)}
    />     
    <TextInput placeholder='Email' 
    onChangeText={(email) => setEmail(email)}/>
    <TextInput placeholder='Password'
    onChangeText={(password1) =>setPassword1(password1)} />
    <TextInput placeholder='conform Password'
    onChangeText={(password2) =>setPassword2(password2)}
    />
    <TouchableOpacity style={styles.begin} 
    onPress={Check}>
    <Text style={styles.begin} >continue </Text>
    </TouchableOpacity> 
        
    </View>
  )
}

export default Signup

const styles = StyleSheet.create({
    Container:{
             justifyContent:'center',
             alignItems:'center',
             
    },
    begin:{
      backgroundColor:'#4895ef',
      padding:10,
      width:'50%',
      borderRadius:3,
      justifyContent:'space-between',
      fontSize:15,
      alignItems:'center',
      color:'#ffff',
      fontWeight: 'bold',
      
      
    }
})