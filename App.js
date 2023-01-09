import { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

const DATA = {
  timer: 1234567,
  laps : [ 231, 556, 235, 977 ],
}

export default class App extends Component {
  render(){
    return (
      <View style={styles.container}>
        <Text>Welcome to my advanced stopwatch app!</Text>
      </View>
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D0D0D',
    alignItems: 'center',
  },
})
