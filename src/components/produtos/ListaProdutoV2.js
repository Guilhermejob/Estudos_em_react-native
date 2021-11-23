import React from 'react';
import {Text, FlatList} from 'react-native';
import estilo from '../estilo';
import produtos from './produtos';

export default props => {
  return (
    <>
      <Text style={estilo.fontEG}>Lista de produtos:</Text>
      <FlatList
        data={produtos}
        keyExtractor={i => `${i.id}`}
        renderItem={({item: p}) => {
          return (
            <Text style={estilo.fontG}>
              {p.id}) {p.nome}
            </Text>
          );
        }}
      />
    </>
  );
};
