import React from 'react';
import {Text, Platform} from 'react-native';
import estilo from './estilo';

export default props => {
  if (Platform.OS === 'android') {
    return <Text>Android</Text>;
  } else if (Platform.OS === 'ios') {
    return <Text>iOS</Text>;
  } else {
    return <Text>Que porra é essa?</Text>;
  }
};
