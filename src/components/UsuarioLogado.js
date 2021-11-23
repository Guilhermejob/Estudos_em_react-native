import React from 'react';
import {Text} from 'react-native';
import estilo from './estilo';
import If from './if';

export default props => {
  const usuario = props.usuario || {};
  return (
    <If test={usuario && usuario.name && usuario.email}>
      <Text style={estilo.fontG}>Usuario logado:</Text>
      <Text style={estilo.fontG}>
        {usuario.name} - {usuario.email}
      </Text>
    </If>
  );
};
