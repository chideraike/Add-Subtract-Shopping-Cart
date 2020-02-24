import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const FunctionComponent = () => {
  const [counterValue, setCounterValue] = useState(0);
  const decrease = () => {setCounterValue(counterValue + 1)}

  const increase = () => {setCounterValue(counterValue - 1)}

  return(
    <View style={{alignSelf: "center", width: 100}}>
      <Text style={{fontSize: 50, alignSelf: 'center'}}>{counterValue}</Text>
      <Button title='+' onPress={decrease} />
      <Button title='-' onPress={increase} />
    </View>
  )
}

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <FunctionComponent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
});
