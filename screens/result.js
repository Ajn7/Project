import { StyleSheet, Text, View, Box } from 'react-native'
import React, { useEffect, useState } from 'react'

const Result = ({route}) => {

  return (
    <View>
      <Text>User ID: {route.params.paramKey1} </Text>
    </View>
     
  )
}

export default Result

const styles = StyleSheet.create({})