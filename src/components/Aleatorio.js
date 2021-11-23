import React from 'react';
import {Text} from 'react-native';
import estilo from './estilo';

const gerarNumeroAleatorio = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function Aleatorio({rangeMin, rangeMax}) {
  return (
    <Text style={estilo.fontG}>
      O numero gerado entre {rangeMin} e {rangeMax} foi :
      {gerarNumeroAleatorio(rangeMin, rangeMax)}
    </Text>
  );
}

export default Aleatorio;
