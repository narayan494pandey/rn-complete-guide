import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {StyleSheet,View,Text, TextInput,Button } from 'react-native';

export default function App() {
  return (
    <View>
      <View>
        <TextInput />
        <Button tittle="ADD"/>
      </View>
      <View>
      
      
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

