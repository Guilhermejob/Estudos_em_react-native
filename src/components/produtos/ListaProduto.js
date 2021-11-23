import React from 'react';
import {Text, View} from 'react-native';
import estilo from '../estilo';
import produtos from './produtos';

export default props => {
  return (
    <>
      <Text style={estilo.fontEG}>Lista de produtos</Text>
      {produtos.map((produto, id) => (
        <View key={id}>
          <Text style={estilo.fontG}>produto: {produto.nome}</Text>
          <Text style={estilo.fontG}>preço: {produto.preco}</Text>
        </View>
      ))}
    </>
  );
};
