import React from 'react';
import {Text} from 'react-native';
import EstiloComum from './estilo';

export default function Comp() {
  return <Text style={EstiloComum.fontG}> componente </Text>;
}

function Comp1() {
  return <Text style={EstiloComum.fontG}> componente 1</Text>;
}

function Comp2() {
  return <Text style={EstiloComum.fontG}> componente 2</Text>;
}

export {Comp1, Comp2};
