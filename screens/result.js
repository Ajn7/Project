import { StyleSheet, Text, View, Box } from 'react-native'
import React, { useEffect, useState } from 'react'

const Result = ({route}) => {


  fetch('http://10.0.2.2:2000/users', {
      method: 'GET',
      //Request Type
    })
      .then((response) => response.json())
      //If response is in json then in success
      .then((responseJson) => {
        //Success
        alert(JSON.stringify(responseJson));
        console.log(responseJson);
      })
      //If response is not in json then in error
      .catch((error) => {
        //Error
        alert(JSON.stringify(error));
        console.error(error);
      });

  return (
    <View>
      <Text>User ID: {route.params.paramKey1} </Text>
    </View>
     
  )
}

export default Result

const styles = StyleSheet.create({})