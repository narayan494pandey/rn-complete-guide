import React, {useState} from 'react';
import {
    StyleSheet,
    View,
    TextInput,
    Button,
    Modal
  }from 'react-native';

const GoalInput = (props) => {
    const [enteredGoal, setEnteredGoal] = useState('');
    const goalInputHandler = (enteredText) =>{ 
        setEnteredGoal(enteredText);
      }
    return(
        <Modal visible={props.visible} animationType="slide">
          <View style={styles.Container}>
            <TextInput placeholder="Course Goal"
              style={styles.input} onChangeText={goalInputHandler}
              value={enteredGoal}
            />
            <Button title="ADD" onPress={props.onAddGoal.bind(this,enteredGoal)}/>
          </View>
        </Modal>
    )

}
const styles = StyleSheet.create({
    Container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
        
      },
      input:{
        borderColor:'blue',
        width:200, 
        borderWidth:1, 
        borderRadius:30,
        padding:10,
        marginBottom:10,
      },

})



export default GoalInput;