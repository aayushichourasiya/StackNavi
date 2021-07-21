import React, {Component} from 'react'
import{
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native'

//Navigation
import 'react-native-gesture-handler'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

const Screen1 = ({navigation}) =>{
  return(
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.btn}
        onPress = {()=>navigation.navigate('Screen2')}
      >
        <Text style={styles.txt}>Screen 2</Text>
      </TouchableOpacity>
    </View>
  )
}

const Screen2 = ({navigation}) =>{
  return(
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.btn}
        onPress={()=>navigation.navigate('Screen1')}
        >
        <Text style={styles.txt}>
          Screen 1
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const Stack = createStackNavigator()

export default class App extends Component{
  render(){
    return(
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Screen1'>
          <Stack.Screen
            name = 'Screen1'
            component = {Screen1}
            options = {{
              headerStyle: {
                backgroundColor: '#B3E5FC'
              },
              title: 'Navigation Screen 1',
              headerTitleStyle: {
                textAlign: 'center',
                color: '#303F9F'
              }
            }}
          />
          <Stack.Screen
            name = 'Screen2'
            component = {Screen2}
            options = {{
              headerStyle: {
                backgroundColor: '#B3E5FC'
              },
              title: 'Navigation Screen 2',
              headerTitleStyle: {
                textAlign: 'center',
                color: '#303F9F'
              }
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex :1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  btn:{
    fontSize: 10,
    fontStyle: 'italic',
    backgroundColor:'#6A1B4D',
    paddingHorizontal: 30,
    paddingVertical: 10,
    textTransform: 'uppercase',
    borderRadius: 15,
    marginTop: 10
  },
  txt: {
    color: '#FFF'
  }
})