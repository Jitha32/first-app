
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'


const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Welocome</Text>
      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Registerr')}>
        <Text>Register</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Login')}>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({ 
  container: {
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    backgroundColor: 'yellow',
    marginVertical: 30,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 20
  }
})
