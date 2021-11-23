import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import estilo from './estilo';

export default ({num = 0}) => {
  return (
    <SafeAreaView>
      <Text style={estilo.fontG}>O numero é</Text>
      <Text style={estilo.fontEG}>{num % 2 === 0 ? 'Par' : 'Impar'}</Text>
    </SafeAreaView>
  );
};
