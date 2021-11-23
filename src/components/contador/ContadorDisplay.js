import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import estilo from '../estilo';

export default props => {
  return (
    <View style={style.Display}>
      <Text style={[estilo.fontG, style.TextCont]}>{props.numCont}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  Display: {
    backgroundColor: '#000',
    borderRadius: 20,
  },
  TextCont: {
    padding: 20,
    width: 300,
    color: '#fff',
  },
});
