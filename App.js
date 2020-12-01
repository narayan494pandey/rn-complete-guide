import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import {StyleSheet,View,TextInput,Button } from 'react-native';

export default function App() {
  const [goal, setGoal] = useState('');
  const goalHandler = (enteredText) =>{ 
    setGoal(enteredText);
  }
  const addGoalHandler = () =>{
    console.log(goal);
  }
  return (
    <View style={styles.screen}>
      <View style={styles.Container}>
        <TextInput placeholder="Course Goal"
          style={styles.input} onChangeText={goalHandler}
          value={goal}
        />
        <Button title="ADD" onPress={addGoalHandler}/>
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

