import React from 'react';
import {Button} from 'react-native';

export default props => {
  return (
    <>
      <Button title="Clique-me" onPress={() => console.warn('Clicou')} />
    </>
  );
};
