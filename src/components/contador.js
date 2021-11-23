import React, {useState} from 'react';
import {Text, Button} from 'react-native';
import estilo from './estilo';

export default props => {
  const [contador, setContador] = useState(props.inicial);

  const inc = () => setContador(contador + 1);

  const dec = () => setContador(contador - 1);

  return (
    <>
      <Button title="Contar +" onPress={() => inc()} />
      <Text style={estilo.fontEG}>{contador}</Text>
      <Button title="Contar -" onPress={() => dec()} />
    </>
  );
};
