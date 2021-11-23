import React, {useState} from 'react';
import {Text} from 'react-native';
import estilo from '../estilo';
import ContadorDisplay from './ContadorDisplay';
import ContadorBotao from './ContadorBotao';

export default props => {
  const [num, setNum] = useState(0);
  const inc = () => setNum(num + 1);
  const dec = () => setNum(num - 1);

  return (
    <>
      <Text style={estilo.fontG}>ContadorV2</Text>
      <ContadorDisplay numCont={num} />
      <ContadorBotao inc={inc} dec={dec} />
    </>
  );
};
