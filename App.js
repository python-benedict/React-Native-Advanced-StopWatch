import { Component } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
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
      <View style={styles.buttonBorder}>
        <Text style={[styles.buttonText, {color}]}>{title}</Text>
      </View>
    </View>
  )
}


function ButtonRow({children}){
  return (
    <View style={styles.buttonRows}>{children}</View>
  )
}

function Lap({number, interval}){
  return(
    <View>
      <Text>Lap {number}</Text>
      <Text>{interval}</Text>
    </View>
  )
}

function LapTable({laps}){
  return(
    <ScrollView>
      {laps.map((lap,index) =>{
        <Lap number={index} interval={lap} />
      })}
    </ScrollView>
  )
}

export default class App extends Component {
  render(){
    return (
      <View style={styles.container}>
        <Timer interval={DATA.timer} />
        <ButtonRow>
          <RoundButton title={'Reset'} color='#FFFFFF' background={'#3D3D3D'}/>
          <RoundButton title={'Start'} color='#50D167' background={'#1B361F'}/>
        </ButtonRow>
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
  buttonBorder:{
    width: 76,
    height: 76,
    borderRadius: 38,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonRows:{
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'space-around',
    marginTop: 80,
  }
})
