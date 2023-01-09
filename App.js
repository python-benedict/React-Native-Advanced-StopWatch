import { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import moment from 'moment'


const DATA = {
  timer: 1234567,
  laps : [ 231, 556, 235, 977 ],
}

function Timer({ interval }){
  const duration = moment.duration(interval)
  const centiseconds = Math.floor(duration.milliseconds() / 10)
  return (
    <Text style={styles.timer}>
      {duration.minutes()}: {duration.seconds()}: { centiseconds}
    </Text>
  ) 
}

function RoundButton({title, color, background}){
  return(
    <View style={[ styles.button, {backgroundColor:background}]}>
      <Text style={[styles.buttonText, {color}]}>{title}</Text>
    </View>
  )
}

export default class App extends Component {
  render(){
    return (
      <View style={styles.container}>
        <Timer interval={DATA.timer} />
        <RoundButton title={'Start'} color='#50D167' background={'#1B361F'}/>
      </View>
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D0D0D',
    alignItems: 'center',
    paddingTop: 130,
  },
  timer:{
    color: 'white',
    fontWeight: 'bold',
    fontSize: 70,
  },
  button:{
    width:80,
    height:80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText:{
    fontWeight: 'bold'
  },
})
