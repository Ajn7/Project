import { StyleSheet, Text, View, Box, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'

const Home = ({route}) => {

  return (
    <View>
      <Text>Username : {route.params.paramKey1} </Text>
      <Text>Health Info</Text>
      <Text>Name: </Text>
      <Text>Age: </Text>
      <Text>Blood Group: </Text>
      <Text>Satus: </Text>
      <Text>How u feel Today(emoji): </Text>
      <Text>Some Control buttons  ⭐️ </Text>
      <TouchableOpacity>
      
      </TouchableOpacity>

    </View>
     
  )
}

export default Home

const styles = StyleSheet.create({})