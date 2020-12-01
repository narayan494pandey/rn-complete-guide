import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import {
  StyleSheet,
  View,
  FlatList
}from 'react-native';
import GoalItem  from './components/GoalItem'
import GoalInput from './components/GoalInput'
export default function App() {
 
  const [courseGoals, setCourseGoals] = useState([]);
  
  const addGoalHandler = (goalTitle) =>{
    setCourseGoals(currentGoals =>[...currentGoals,{id:Math.random().toString(), value:goalTitle}]);
  }
  
  return (
      <View style={styles.screen}>
        <GoalInput onAddGoal={addGoalHandler}/>
        <FlatList keyExtractor={(item,index) => item.id}
          data={courseGoals} 
          renderItem={itemData => (
          <GoalItem title={itemData.item.value}/>
        )}>
        
        
        </FlatList>
        <StatusBar style="auto" />
      </View>
    
  );
}

const styles = StyleSheet.create({
  screen:{
    padding:50,
  },
  
  
})

