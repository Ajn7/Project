import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Result = ({route}) => {
  return (
    <View>
      <Text>User ID: {route.params.paramKey1} </Text>
    </View>
  )
}

export default Result

const styles = StyleSheet.create({})