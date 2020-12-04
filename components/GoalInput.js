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
    const addGoalHandler = () =>{
      props.onAddGoal(enteredGoal);
      setEnteredGoal(' ');
    }
   
    return(
        <Modal visible={props.visible} animationType="slide">
          <View style={styles.Container}>
            <TextInput placeholder="Course Goal"
              style={styles.input} onChangeText={goalInputHandler}
              value={enteredGoal}
            />
            <View style={styles.buttonContainer}>
              <View style={styles.button}><Button  title="CANCEL" color="red" onPress={props.onCancel} /></View>
              <View style={styles.button}><Button  title="ADD" onPress={addGoalHandler}/></View>
            </View>
            
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
      buttonContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        padding:10,
        width:'60%'

      },
      button:{
        width:'40%',
      }

})



export default GoalInput;