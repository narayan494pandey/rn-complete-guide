import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Button
}from 'react-native';
import GoalItem  from './components/GoalItem'
import GoalInput from './components/GoalInput'
export default function App() {
 
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode ] = useState(false);
  console.log("RE_RENDERING COMPONET");
  console.log(courseGoals);
  const addGoalHandler = (goalTitle) =>{
    setCourseGoals(currentGoals =>[...currentGoals,{id:Math.random().toString(), value:goalTitle}]);
    setIsAddMode(false);
    console.log("Goal ADDed in LIST " +goalTitle);
  }
  const removeGoalHandler = goalId =>{
    console.log(" TO be Deleted :" +goalId);
    console.log(courseGoals);
    setCourseGoals(currentGoals =>{
     
      return currentGoals.filter((goal) => goal.id !== goalId)
    })
    
  }
  const cancelGoalAddHandler = () =>{
    setIsAddMode(false);
  }
  
  return (
      <View style={styles.screen}>
        <Button title="Add New Goal" onPress={() => setIsAddMode(true)}/>
        <GoalInput visible={isAddMode} onAddGoal={addGoalHandler} onCancel={cancelGoalAddHandler}/>
        <FlatList keyExtractor={(item,index) => item.id}
          data={courseGoals} 
          renderItem={itemData => (
          <GoalItem id={itemData.item.id} onDelete={removeGoalHandler} title={itemData.item.value} />
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

