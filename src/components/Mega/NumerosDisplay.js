import React from 'react';
import {Text, SafeAreaView, StyleSheet} from 'react-native';
import estilo from '../estilo';

export default ({num}) => {
  return (
    <SafeAreaView style={style.Container}>
      <Text style={[estilo.fontG, style.Num]}>{num}</Text>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  Container: {
    height: 45,
    width: 45,
    backgroundColor: '#202020',
    margin: 5,
    borderRadius: 100,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Num: {
    color: '#ffff',
  },
});
