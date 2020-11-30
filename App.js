import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {StyleSheet,View,Text, TextInput,Button } from 'react-native';

export default function App() {
  return (
    <View style={{padding: 50}}>
      <View style={{flexDirection:'row', justifyContent:'space-between',alignItems:'center'}}>
        <TextInput placeholder="Course Goal"
          style={{borderColor:'blue',width:200, borderWidth:1, borderRadius:30,padding:10}}
        />

        <Button title="ADD" />
      </View>
      <View>
      
      
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

