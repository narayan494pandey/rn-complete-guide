import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {StyleSheet,View,Text, TextInput,Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.screen}>
      <View style={styles.Container}>
        <TextInput placeholder="Course Goal"
          style={styles.input}
        />

        <Button title="ADD" />
      </View>
      <View>
      
      
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  screen:{
    padding:50,
  },
  Container:{
    flexDirection:'row', 
    justifyContent:'space-between',
    alignItems:'center'
    
  },
  input:{
    borderColor:'blue',
    width:200, 
    borderWidth:1, 
    borderRadius:30,
    padding:10
  },
})

