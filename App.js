import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import {StyleSheet,Text,View,TextInput,Button } from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);
  const goalInputHandler = (enteredText) =>{ 
    setEnteredGoal(enteredText);
  }
  const addGoalHandler = () =>{
    setCourseGoals(currentGoals =>[...currentGoals, enteredGoal]);
  }
  
  return (
    <View style={styles.screen}>
      <View style={styles.Container}>
        <TextInput placeholder="Course Goal"
          style={styles.input} onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <Button title="ADD" onPress={addGoalHandler}/>
      </View>
      <View style={styles.Container} >
        {courseGoals.map((goal) => <Text>{goal}</Text>)}
      
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

