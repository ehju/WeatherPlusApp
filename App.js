import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.header}>
        <Text style={styles.btnText}>Weather</Text>
        <Text style={styles.btnText}>+</Text>       
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
