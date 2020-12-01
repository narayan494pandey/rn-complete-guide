import React, {useState} from 'react';
import {
    StyleSheet,
    View,
    TextInput,
    Button,
  }from 'react-native';

const GoalInput = (props) => {
    const [enteredGoal, setEnteredGoal] = useState('');
    const goalInputHandler = (enteredText) =>{ 
        setEnteredGoal(enteredText);
      }
    return(
        <View style={styles.Container}>
          <TextInput placeholder="Course Goal"
            style={styles.input} onChangeText={goalInputHandler}
            value={enteredGoal}
          />
          <Button title="ADD" onPress={props.onAddGoal.bind(this,enteredGoal)}/>
        </View>
    )

}
const styles = StyleSheet.create({
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



export default GoalInput;