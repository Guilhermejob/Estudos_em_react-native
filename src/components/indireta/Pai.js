import React, {useState} from 'react';
import Filho from './Filho';
import {Text} from 'react-native';

export default props => {
  const [numero, setNumero] = useState(0);

  function exibirValor(num) {
    setNumero(num);
  }

  return (
    <>
      <Text>{numero}</Text>
      <Filho min={10} max={20} funcao={exibirValor} />
    </>
  );
};
