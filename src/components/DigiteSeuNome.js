import React, {useState} from 'react';
import {View, TextInput, Text} from 'react-native';
import estilo from './estilo';

export default props => {
  const [userName, setUserName] = useState('teste');

  return (
    <View>
      <Text style={estilo.fontEG}>Ola {userName}!!!</Text>
      <TextInput
        placeholder="Digite seu nome aqui"
        onChangeText={nome => setUserName(nome)}
        value={userName}
      />
    </View>
  );
};
