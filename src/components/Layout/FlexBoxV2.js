import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Quadrado from './Quadrado';

export default props => {
  return (
    <>
      <SafeAreaView style={style.FlexV2}>
        <Quadrado color="#00FFFF" />
        <Quadrado />
        <Quadrado color="#00FFFF" />
        <Quadrado />
        <Quadrado color="#00FFFF" />
        <Quadrado />
      </SafeAreaView>
    </>
  );
};

const style = StyleSheet.create({
  FlexV2: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'orange',
    padding: 30,
    borderWidth: 5,
    borderRadius: 10,
    borderBottomColor: '#123',
    width: '100%',
    justifyContent: 'space-evenly',
  },
});
