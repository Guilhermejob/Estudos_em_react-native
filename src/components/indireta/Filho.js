import React from 'react';
import {Button} from 'react-native';

export default props => {
  function gerarNumero(min, max) {
    const fator = max - min + 1;
    // eslint-disable-next-line radix
    return parseInt(Math.random() * fator) + min;
  }
  return (
    <>
      <Button
        title="executar"
        onPress={function () {
          const n = gerarNumero(props.min, props.max);
          props.funcao(n);
        }}
      />
    </>
  );
};
