import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {StyleSheet,View,Text, TextInput,Button } from 'react-native';

export default function App() {
  return (
    <View style={{padding: 50}}>
      <View>
        <TextInput placeholder="Course Goal"
          style={{borderBottomColor:'black' , borderBottomWidth:1}}
        
        
        />

        <Button title="ADD" />
      </View>
      <View>
      
      
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

