import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  const [onweather, setWeather] = useState(true);
  const weather = () => setWeather(true);
  const plus = () => setWeather(false);
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.header}>
        <TouchableOpacity>
         <Text style={{...styles.btnText, color : weather ? "white" : "#95c3e7"}}>Weather</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={{...styles.btnText, color : !weather ? "white" : "#95c3e7"}}>+</Text>       
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#57A0D9',
    paddingHorizontal:20,
  },
  header: {
    flexDirection : "row",
    justifyContent: 'space-between',
    marginTop:50,
  },
  btnText: {
    fontSize: 40,
    fontWeight:"600",
    color: 'white',
    fontWeight: 'bold',
  },
});
