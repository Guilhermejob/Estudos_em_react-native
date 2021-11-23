import React from 'react';
import {Button, StyleSheet} from 'react-native';

export default props => {
  return (
    <>
      <Button style={buttonstyle.teste} title="+" onPress={props.inc} />
      <Button title="-" onPress={props.dec} style={buttonstyle.teste} />
    </>
  );
};

const buttonstyle = StyleSheet.create({
  teste: {
    backgroundColor: '#A99',
  },
});
