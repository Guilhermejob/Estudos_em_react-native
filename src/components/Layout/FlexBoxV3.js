import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Quadrado from './Quadrado';

export default props => {
  return (
    <>
      <SafeAreaView style={style.FlexV3}>
        <Quadrado color="#00FFFF" />
        <Quadrado />
        <Quadrado color="#00FFFF" />
        <Quadrado />
        <Quadrado color="#00FFFF" />
      </SafeAreaView>
    </>
  );
};

const style = StyleSheet.create({
  FlexV3: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',

    height: 500,
    width: '100%',
    backgroundColor: 'orange',
    padding: 30,
    borderWidth: 5,
    borderRadius: 10,
    borderBottomColor: '#123',
  },
});
